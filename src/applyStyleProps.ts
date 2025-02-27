import { CSSProperties } from 'react';
import { DEFAULT_STYLE_KEY_MAP } from './constants';
import { StyleProps, StylePropsOptions, XStyleKeyMap } from './types';

/**
 * スタイル関連のプロパティをスタイルプロパティ(styleやcss)へ適用する
 * スタイルプロパティに既に値が設定されている場合の動作は下記の通り
 *
 * @param props プロパティ
 * @param options オプション
 * @returns
 */
export default function applyStyleProps<
  P extends Record<string, any> & StyleProps<M>,
  M extends Record<string, keyof CSSProperties> = XStyleKeyMap,
>(props: P, options: StylePropsOptions<M> = {}) {
  const {
    styleProp = 'style',
    styleApplyMode,
    styleKeyMap = DEFAULT_STYLE_KEY_MAP,
  } = options;
  const rest: Record<string, any> = { ...props };

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
    const orgStyle = rest[styleProp];
    if (!orgStyle) {
      // 未設定の場合はそのまま設定
      rest[styleProp] = style;
    } else if (Array.isArray(orgStyle)) {
      // 配列の場合は先頭に追加
      rest[styleProp] = [style].concat(orgStyle);
    } else if (Object.prototype.toString.call(orgStyle) === '[object Object]') {
      if (styleApplyMode === 'append') {
        // オブジェクトで'append'の場合は先頭に追加
        rest[styleProp] = [style, orgStyle];
      } else {
        // オブジェクトで'append'以外の場合はマージ
        for (const key in orgStyle) {
          if (orgStyle[key] !== undefined) {
            style[key] = orgStyle[key];
          }
        }
        rest[styleProp] = style;
      }
    }
  }

  return rest as Omit<P, keyof StyleProps<M>>;
}
