import { CSSProperties } from 'react';
import { DEFAULT_STYLE_KEY_MAP } from './constants';
import { DefaultStyleKeyMap, StyleProps, StylePropsOptions } from './types';

const DEFAULT_APPLY_STYLE_MODES = {
  style: 'merge',
  css: 'append',
  sx: 'append',
};

/**
 * スタイル関連のプロパティをスタイルプロパティ(styleやcss)へ適用する
 * @param props プロパティ
 * @param options オプション
 * @returns
 */
export default function applyStyleProps<
  P extends Record<string, any>,
  M extends Record<string, keyof CSSProperties> = DefaultStyleKeyMap,
>(props: P & StyleProps<M>, options: StylePropsOptions<M> = {}) {
  const {
    styleProp = 'style',
    styleApplyMode = DEFAULT_APPLY_STYLE_MODES[styleProp] ?? 'merge',
    styleKeyMap = DEFAULT_STYLE_KEY_MAP,
  } = options;
  const rest: Record<string, any> = { ...props };

  let style;
  if (styleApplyMode === 'append') {
    // append
    style = {};
  } else {
    // merge
    style = rest[styleProp];
    delete rest[styleProp];
  }

  // rest配下のプロパティをstyleに移動
  _moveStyleProps(rest, style, styleKeyMap);

  if (Object.keys(style).length) {
    if (styleApplyMode === 'append') {
      // append
      if (Array.isArray(rest[styleProp])) {
        rest[styleProp].push(style);
      } else if (rest[styleProp]) {
        rest[styleProp] = [style, rest[styleProp]];
      } else {
        rest[styleProp] = style;
      }
    } else {
      // merge
      rest[styleProp] = style;
    }
  }

  return rest as P;
}

/**
 * propsからstyleにプロパティを移す
 */
function _moveStyleProps(
  props: Record<string, any>,
  style: Record<string, any>,
  styleKeyMap: Record<string, keyof CSSProperties>,
) {
  for (const xKey in styleKeyMap) {
    if (props[xKey] !== undefined) {
      const key = styleKeyMap[xKey];
      if (style[key] === undefined) {
        style[key] = props[xKey];
        delete props[xKey];
      }
    }
  }
}
