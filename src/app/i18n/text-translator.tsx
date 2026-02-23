'use client';
import { useEffect, useRef } from 'react';
import { useI18n } from './provider';

function normalize(s: string): string { return s.replace(/\s+/g, ' ').trim(); }

export function TextTranslator() {
  const { translations, locale } = useI18n();
  const originalTexts = useRef<Map<Text, string>>(new Map());

  useEffect(() => {
    if (typeof document === 'undefined') return;
    originalTexts.current.forEach((orig, node) => { if (document.body.contains(node)) node.textContent = orig; });
    if (Object.keys(translations).length === 0) return;

    const keyMap = new Map<string, string>();
    for (const [key, value] of Object.entries(translations)) {
      const nk = normalize(key);
      if (nk && value && nk !== value) keyMap.set(nk, value);
    }
    if (keyMap.size === 0) return;

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
  }, [translations, locale]);

  return null;
}
