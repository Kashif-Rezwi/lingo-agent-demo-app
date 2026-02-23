'use client';
import { useEffect, useRef } from 'react';
import { useI18n } from './provider';

function normalize(s: string): string { return s.replace(/\\s+/g, ' ').trim(); }

const TRANSLATABLE_ATTRS = ['placeholder', 'title', 'alt', 'aria-label', 'aria-placeholder'];
const ATTR_SELECTOR = TRANSLATABLE_ATTRS.map(a => '[' + a + ']').join(',');

export function TextTranslator() {
  const { translations, locale } = useI18n();
  const originalTexts = useRef<Map<Text, string>>(new Map());
  const originalAttrs = useRef<Map<string, string>>(new Map());

  useEffect(() => {
    if (typeof document === 'undefined') return;

    // Restore original text nodes
    originalTexts.current.forEach((orig, node) => { if (document.body.contains(node)) node.textContent = orig; });

    // Restore original attributes
    originalAttrs.current.forEach((orig, key) => {
      const [xpath, attr] = key.split('::');
      const el = document.querySelector(xpath);
      if (el) el.setAttribute(attr, orig);
    });

    if (Object.keys(translations).length === 0) return;

    const keyMap = new Map<string, string>();
    for (const [key, value] of Object.entries(translations)) {
      const nk = normalize(key);
      if (nk && value && nk !== value) keyMap.set(nk, value);
    }
    if (keyMap.size === 0) return;

    // ─── Pass 1: Text nodes ────────────────────────────────────────────
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    const updates: Array<[Text, string]> = [];
    let node: Text | null;
    while ((node = walker.nextNode() as Text | null)) {
      const raw = node.textContent ?? '';
      if (!raw.trim()) continue;
      if (!originalTexts.current.has(node)) originalTexts.current.set(node, raw);
      const original = originalTexts.current.get(node)!;
      const normalised = normalize(original);
      if (keyMap.has(normalised)) { updates.push([node, keyMap.get(normalised)!]); continue; }
      let replaced = original; let didReplace = false;
      for (const [key, translated] of [...keyMap.entries()].sort((a, b) => b[0].length - a[0].length)) {
        if (key.length < 3) continue;
        if (replaced.includes(key)) { replaced = replaced.split(key).join(translated); didReplace = true; }
      }
      if (didReplace) updates.push([node, replaced]);
    }
    updates.forEach(([n, text]) => { n.textContent = text; });

    // ─── Pass 2: Element attributes ────────────────────────────────────
    const elements = document.body.querySelectorAll(ATTR_SELECTOR);
    elements.forEach((el, idx) => {
      TRANSLATABLE_ATTRS.forEach(attr => {
        const val = el.getAttribute(attr);
        if (!val) return;
        const norm = normalize(val);
        const storeKey = `[data-lingo-idx="${idx}"]||${attr}`;
        if (!originalAttrs.current.has(storeKey)) {
          el.setAttribute('data-lingo-idx', String(idx));
          originalAttrs.current.set(storeKey, val);
        }
        if (keyMap.has(norm)) {
          el.setAttribute(attr, keyMap.get(norm)!);
        }
      });
    });
  }, [translations, locale]);

  return null;
}
