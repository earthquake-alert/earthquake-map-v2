const HTML_ELEMENT = document.querySelector('html')!;

// `data-` 形式のグローバルデータを取得する
export function globalData(key: string): string {
  const value = HTML_ELEMENT?.getAttribute(key);
  if (!value) {
    throw new Error(`global data not found: ${key}`);
  }
  return value;
}
