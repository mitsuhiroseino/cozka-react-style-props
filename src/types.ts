import { CSSProperties } from 'react';
import { DEFAULT_STYLE_KEY_MAP } from './constants';
import { Prefixed, PrefixedUnion } from './utils-type';

/**
 * デフォルトスタイルキーマップ
 */
export type DefaultStyleKeyMap = typeof DEFAULT_STYLE_KEY_MAP;

/**
 * props配下のスタイルとstyle配下のキーのマッピング
 */
export type StyleKeyMap = Record<string, keyof CSSProperties>;

/**
 * スタイル関連のプロパティ
 */
export type StyleProps<M extends StyleKeyMap = DefaultStyleKeyMap> = Record<
  keyof M,
  CSSProperties[M[keyof M]]
>;

export type StylePropsOptions<M extends StyleKeyMap = DefaultStyleKeyMap> = {
  /**
   * スタイルプロパティの設定先
   */
  styleProp?: 'style' | 'css' | 'sx' | string;

  /**
   * `styleProp`で指定したプロパティに値が設定されていた時の\
   * スタイル関連のプロパティを適用する方法
   * 各値の意味は下記の通り
   *
   * - `merge`: オブジェクトのマージ
   * - `append`: 配列への追加
   *
   * またデフォルトは下記の通り
   *
   * - styleProp=`style`の場合: `merge`
   * - styleProp=`css`の場合: `append`
   * - styleProp=`sx`の場合: `append`
   * - 上記以外の場合: `merge`
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
 * 装飾に関するプロパティ
 */
export type XDecorationStyleProps = Prefixed<
  Pick<CSSProperties, DecorationStyleKey>,
  Prefix
>;

/**
 * 視覚効果に関するプロパティ
 */
export type XEffectStyleProps = Prefixed<
  Pick<CSSProperties, EffectStyleKey>,
  Prefix
>;

/**
 * Flexboxに関するプロパティ
 */
export type XFlexboxStyleProps = Prefixed<
  Pick<CSSProperties, FlexboxStyleKey>,
  Prefix
>;

/**
 * Flexboxの子要素に関するプロパティ
 */
export type XFlexboxItemStyleProps = Prefixed<
  Pick<CSSProperties, FlexboxItemStyleKey>,
  Prefix
>;

/**
 * レイアウトに関するプロパティ
 */
export type XLayoutStyleProps = Prefixed<
  Pick<CSSProperties, LayoutStyleKey>,
  Prefix
>;

/**
 * 位置に関するプロパティ
 */
export type XPositionStyleProps = Prefixed<
  Pick<CSSProperties, PositionStyleKey>,
  Prefix
>;

/**
 * サイズに関するプロパティ
 */
export type XSizeStyleProps = Prefixed<
  Pick<CSSProperties, SizeStyleKey>,
  Prefix
>;

/**
 * 余白に関するプロパティ
 */
export type XSpacingStyleProps = Prefixed<
  Pick<CSSProperties, SpacingStyleKey>,
  Prefix
>;

/**
 * スタイルのプロパティ
 */
export type XStyleProps =
  | XDecorationStyleProps
  | XEffectStyleProps
  | XFlexboxStyleProps
  | XFlexboxItemStyleProps
  | XLayoutStyleProps
  | XPositionStyleProps
  | XSizeStyleProps
  | XSpacingStyleProps;

export type PrefixedStyleKeyMap<U extends string> = {
  [K in U as PrefixedUnion<K, Prefix>]: K;
};

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
