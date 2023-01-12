// 毎回querySelectorをするのはパフォーマンス的にちょっとアレなので
// グローバル化してしまう
const HTML_ELEMENT = document.querySelector('html')!;

/**
 * `data-` 形式のグローバルデータを取得する。
 *
 * @param key - key名
 * @param noError - trueの場合は存在しない場合はundefinedを返します。falseの場合存在しないとエラーになる
 * @returns グローバルデータの値
 */
export function globalData(key: string, noError: true): string | undefined;
export function globalData(key: string): string;
export function globalData(key: string, noError = false): string | undefined {
  const value = HTML_ELEMENT?.getAttribute(key);
  if (noError && !value) {
    throw new Error(`global data not found: ${key}`);
  }
  return value ?? undefined;
}
