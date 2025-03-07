import { PrefixedUnion } from '@cozka/utils-niche-types';
import { CSSProperties } from 'react';

/**
 * props配下のスタイルとstyle配下のキーのマッピング
 */
export type StyleKeyMap = Record<string, keyof CSSProperties>;

/**
 * スタイル関連のプロパティ
 */
export type StyleProps<M extends StyleKeyMap = XStyleKeyMap> = {
  [K in keyof M]?: CSSProperties[M[K]];
};

/**
 * プレフィックスを付与したプロパティと元のプロパティのマッピング
 */
export type PrefixedStyleKeyMap<P extends string, U extends string> = {
  [K in U as PrefixedUnion<P, K>]: K;
};

/**
 * スタイル関連のプロパティをstyle等に移動した後のプロパティ
 */
export type StyledProps<P, M extends StyleKeyMap = XStyleKeyMap> = Omit<
  P,
  keyof M
>;

export type StylePropsOptions<M extends StyleKeyMap = XStyleKeyMap> = {
  /**
   * スタイル関連のプロパティの設定先
   */
  styleProp?: 'style' | 'css' | 'sx' | string;

  /**
   * `styleProp`で指定したプロパティにオブジェクトの値が設定されていた時の\
   * スタイル関連のプロパティを適用する方法
   * 各値における動作は下記の通り
   *
   * - `merge`: オブジェクトに設定されていないプロパティのみマージ
   * - `append`: 配列を作成し追加
   *
   * デフォルトは`merge`
   */
  styleApplyMode?: 'merge' | 'append';

  /**
   * プロパティとスタイルのプロパティのマッピング\
   * 未指定の場合はDEFAULT_STYLE_KEY_MAP
   */
  styleKeyMap?: M;
};

type Prefix = 'x';

/**
 * styleKeyMapのデフォルト値の装飾に関するプロパティ
 */
export type XDecorationStyleKeyMap = PrefixedStyleKeyMap<
  Prefix,
  DecorationStyleKey
>;

/**
 * styleKeyMapのデフォルト値の視覚効果に関するプロパティ
 */
export type XEffectStyleKeyMap = PrefixedStyleKeyMap<Prefix, EffectStyleKey>;

/**
 * styleKeyMapのデフォルト値のFlexboxに関するプロパティ
 */
export type XFlexboxStyleKeyMap = PrefixedStyleKeyMap<Prefix, FlexboxStyleKey>;

/**
 * styleKeyMapのデフォルト値のFlexboxの子要素に関するプロパティ
 */
export type XFlexboxItemStyleKeyMap = PrefixedStyleKeyMap<
  Prefix,
  FlexboxItemStyleKey
>;

/**
 * styleKeyMapのデフォルト値のレイアウトに関するプロパティ
 */
export type XLayoutStyleKeyMap = PrefixedStyleKeyMap<Prefix, LayoutStyleKey>;

/**
 * styleKeyMapのデフォルト値の位置に関するプロパティ
 */
export type XPositionStyleKeyMap = PrefixedStyleKeyMap<
  Prefix,
  PositionStyleKey
>;

/**
 * styleKeyMapのデフォルト値のサイズに関するプロパティ
 */
export type XSizeStyleKeyMap = PrefixedStyleKeyMap<Prefix, SizeStyleKey>;

/**
 * styleKeyMapのデフォルト値の余白に関するプロパティ
 */
export type XSpacingStyleKeyMap = PrefixedStyleKeyMap<Prefix, SpacingStyleKey>;

/**
 * styleKeyMapのデフォルト値のプロパティ
 */
export type XStyleKeyMap = XDecorationStyleKeyMap &
  XEffectStyleKeyMap &
  XFlexboxStyleKeyMap &
  XFlexboxItemStyleKeyMap &
  XLayoutStyleKeyMap &
  XPositionStyleKeyMap &
  XSizeStyleKeyMap &
  XSpacingStyleKeyMap;

/**
 * 装飾に関するスタイルのキー
 */
export type DecorationStyleKey =
  | 'background'
  | 'backgroundColor'
  | 'border'
  | 'borderBottom'
  | 'borderColor'
  | 'borderLeft'
  | 'borderRadius'
  | 'borderRight'
  | 'borderTop'
  | 'boxShadow'
  | 'color';

/**
 * 視覚効果に関するスタイルのキー
 */
export type EffectStyleKey = 'opacity' | 'visibility';

/**
 * Flexboxに関するスタイルのキー
 */
export type FlexboxStyleKey =
  | 'alignItems'
  | 'flexDirection'
  | 'flexWrap'
  | 'justifyContent'
  | 'gap';

/**
 * Flexboxの子要素に関するスタイルのキー
 */
export type FlexboxItemStyleKey =
  | 'flex'
  | 'flexBasis'
  | 'flexGrow'
  | 'flexShrink';

/**
 * レイアウトに関するスタイルのキー
 */
export type LayoutStyleKey = 'display' | 'overflow';

/**
 * 位置に関するスタイルのキー
 */
export type PositionStyleKey =
  | 'bottom'
  | 'left'
  | 'position'
  | 'right'
  | 'top'
  | 'zIndex';

/**
 * サイズに関するスタイルのキー
 */
export type SizeStyleKey =
  | 'height'
  | 'maxHeight'
  | 'maxWidth'
  | 'minHeight'
  | 'minWidth'
  | 'width'
  | 'boxSizing';

/**
 * 余白に関するスタイルのキー
 */
export type SpacingStyleKey =
  | 'margin'
  | 'marginBottom'
  | 'marginLeft'
  | 'marginRight'
  | 'marginTop'
  | 'padding'
  | 'paddingBottom'
  | 'paddingLeft'
  | 'paddingRight'
  | 'paddingTop';

/**
 * スタイルのキー
 */
export type StyleKey =
  | DecorationStyleKey
  | EffectStyleKey
  | FlexboxStyleKey
  | FlexboxItemStyleKey
  | LayoutStyleKey
  | PositionStyleKey
  | SizeStyleKey
  | SpacingStyleKey;
