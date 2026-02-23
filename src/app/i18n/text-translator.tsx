'use client';
import { useEffect, useRef } from 'react';
import { useI18n } from './provider';

/** Normalise whitespace for consistent key lookup. */
function normalize(s: string): string {
  return s.replace(/\s+/g, ' ').trim();
}

/**
 * TextTranslator — invisible component mounted in root layout.
 * On locale change it walks the DOM and replaces text nodes whose normalised
 * content matches a translation key. Uses two strategies:
 *   1. Exact match (fastest)
 *   2. Substring match (catches partial matches within larger nodes)
 */
export function TextTranslator() {
  const { translations, locale } = useI18n();
  const originalTexts = useRef<Map<Text, string>>(new Map());

  useEffect(() => {
    if (typeof document === 'undefined') return;

    // Step 1 — restore all text nodes to originals (enables FR→JA switching)
    originalTexts.current.forEach((orig, node) => {
      if (document.body.contains(node)) node.textContent = orig;
    });

    // Step 2 — if English (empty translations), we're done
    if (Object.keys(translations).length === 0) return;

    // Build a lookup map: normalised English key → translated value
    const keyMap = new Map<string, string>();
    for (const [key, value] of Object.entries(translations)) {
      const nk = normalize(key);
      if (nk && value && nk !== value) keyMap.set(nk, value);
    }
    if (keyMap.size === 0) return;

    // Step 3 — walk all DOM text nodes and apply translations
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    const updates: Array<[Text, string]> = [];

    let node: Text | null;
    while ((node = walker.nextNode() as Text | null)) {
      const raw = node.textContent ?? '';
      if (!raw.trim()) continue;

      // Snapshot original the first time
      if (!originalTexts.current.has(node)) {
        originalTexts.current.set(node, raw);
      }

      const original = originalTexts.current.get(node)!;
      const normalised = normalize(original);

      // Strategy 1: Exact match
      if (keyMap.has(normalised)) {
        updates.push([node, keyMap.get(normalised)!]);
        continue;
      }

      // Strategy 2: Substring replacement — replace all matching keys found inside this node
      let replaced = original;
      let didReplace = false;
      // Sort keys longest-first to prevent shorter keys from partially matching longer phrases
      const sortedKeys = [...keyMap.entries()].sort((a, b) => b[0].length - a[0].length);
      for (const [key, translated] of sortedKeys) {
        if (key.length < 3) continue; // skip very short keys to avoid false positives
        if (replaced.includes(key)) {
          replaced = replaced.split(key).join(translated);
          didReplace = true;
        }
      }
      if (didReplace) {
        updates.push([node, replaced]);
      }
    }

    updates.forEach(([n, text]) => { n.textContent = text; });
  }, [translations, locale]);

  return null;
}
