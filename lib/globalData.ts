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
export function globalData<T = string>(
  key: string,
  noError: true
): T | undefined;
export function globalData<T = string>(key: string): T;
export function globalData<T = string>(
  key: string,
  noError = false
): T | undefined {
  const value = HTML_ELEMENT?.getAttribute(key);
  if (noError && !value) {
    throw new Error(`global data not found: ${key}`);
  }
  return (value as T) ?? undefined;
}
