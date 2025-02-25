import {
  DecorationStyleKey,
  EffectStyleKey,
  FlexboxItemStyleKey,
  FlexboxStyleKey,
  LayoutStyleKey,
  PositionStyleKey,
  PrefixedStyleKeyMap,
  SizeStyleKey,
  SpacingStyleKey,
} from './types';

/**
 * 装飾に関するスタイルのキーのマッピング
 */
export const DECORATION_STYLE_KEY_MAP: PrefixedStyleKeyMap<DecorationStyleKey> =
  {
    xBackground: 'background',
    xBackgroundColor: 'backgroundColor',
    xBorder: 'border',
    xBorderBottom: 'borderBottom',
    xBorderColor: 'borderColor',
    xBorderLeft: 'borderLeft',
    xBorderRadius: 'borderRadius',
    xBorderRight: 'borderRight',
    xBorderTop: 'borderTop',
    xBoxShadow: 'boxShadow',
    xColor: 'color',
  } as const;

/**
 * 視覚効果に関するスタイルのキーのマッピング
 */
export const EFFECT_STYLE_KEY_MAP: PrefixedStyleKeyMap<EffectStyleKey> = {
  xOpacity: 'opacity',
  xVisibility: 'visibility',
};

/**
 * Flexboxに関するスタイルのキーのマッピング
 */
export const FLEXBOX_STYLE_KEY_MAP: PrefixedStyleKeyMap<FlexboxStyleKey> = {
  xAlignItems: 'alignItems',
  xFlexDirection: 'flexDirection',
  xFlexWrap: 'flexWrap',
  xJustifyContent: 'justifyContent',
  xGap: 'gap',
};

/**
 * Flexboxの子要素に関するスタイルのキー
 */
export const FLEXBOX_ITEM_STYLE_KEY_MAP: PrefixedStyleKeyMap<FlexboxItemStyleKey> =
  {
    xFlex: 'flex',
    xFlexBasis: 'flexBasis',
    xFlexGrow: 'flexGrow',
    xFlexShrink: 'flexShrink',
  };

/**
 * レイアウトに関するスタイルのキー
 */
export const LAYOUT_STYLE_KEY_MAP: PrefixedStyleKeyMap<LayoutStyleKey> = {
  xDisplay: 'display',
  xOverflow: 'overflow',
};

/**
 * 位置に関するスタイルのキー
 */
export const POSITION_STYLE_KEY_MAP: PrefixedStyleKeyMap<PositionStyleKey> = {
  xBottom: 'bottom',
  xLeft: 'left',
  xPosition: 'position',
  xRight: 'right',
  xTop: 'top',
  xZIndex: 'zIndex',
};

/**
 * サイズに関するスタイルのキー
 */
export const SIZE_STYLE_KEY_MAP: PrefixedStyleKeyMap<SizeStyleKey> = {
  xHeight: 'height',
  xMaxHeight: 'maxHeight',
  xMaxWidth: 'maxWidth',
  xMinHeight: 'minHeight',
  xMinWidth: 'minWidth',
  xWidth: 'width',
  xBoxSizing: 'boxSizing',
};

/**
 * 余白に関するスタイルのキー
 */
export const SPACING_STYLE_KEY_MAP: PrefixedStyleKeyMap<SpacingStyleKey> = {
  xMargin: 'margin',
  xMarginBottom: 'marginBottom',
  xMarginLeft: 'marginLeft',
  xMarginRight: 'marginRight',
  xMarginTop: 'marginTop',
  xPadding: 'padding',
  xPaddingBottom: 'paddingBottom',
  xPaddingLeft: 'paddingLeft',
  xPaddingRight: 'paddingRight',
  xPaddingTop: 'paddingTop',
};

export const DEFAULT_STYLE_KEY_MAP = {
  ...DECORATION_STYLE_KEY_MAP,
  ...EFFECT_STYLE_KEY_MAP,
  ...FLEXBOX_STYLE_KEY_MAP,
  ...FLEXBOX_ITEM_STYLE_KEY_MAP,
  ...LAYOUT_STYLE_KEY_MAP,
  ...POSITION_STYLE_KEY_MAP,
  ...SIZE_STYLE_KEY_MAP,
  ...SPACING_STYLE_KEY_MAP,
};
