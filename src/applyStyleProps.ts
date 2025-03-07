import proxyStyle from '@gusok/react-style-proxy';
import { CSSProperties } from 'react';
import { DEFAULT_STYLE_KEY_MAP } from './constants';
import { StyleProps, StylePropsOptions, XStyleKeyMap } from './types';

/**
 * スタイル関連のプロパティをスタイルプロパティ(styleやcss)へ適用する
 *
 * @param props プロパティ
 * @param options オプション
 * @returns
 */
export default function applyStyleProps<
  P extends Record<string, any> & StyleProps<M>,
  M extends Record<string, keyof CSSProperties> = XStyleKeyMap,
>(props: P, options: StylePropsOptions<M> = {}) {
  const { styleKeyMap = DEFAULT_STYLE_KEY_MAP, ...opts } = options;
  let rest: Record<string, any> = { ...props };

  const style: Record<string, any> = {};
  let hasStyle = false;
  // rest配下のプロパティをstyleに移動
  for (const xKey in styleKeyMap) {
    if (rest[xKey] !== undefined) {
      const key = styleKeyMap[xKey];
      style[key] = rest[xKey];
      delete rest[xKey];
      hasStyle = true;
    }
  }

  if (hasStyle) {
    // style関連のプロパティがある場合のみ処理
    rest = proxyStyle(rest, style, opts);
  }

  return rest as Omit<P, keyof StyleProps<M>>;
}
