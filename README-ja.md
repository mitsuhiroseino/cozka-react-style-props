# @gusok/react-style-props

**[English README is available here](./README.md)**

`@gusok/react-style-props` は、コンポーネントのpropsに設定されたスタイル関連のプロパティを、  
[React](https://react.dev/)標準の`style`や[Emotion](https://emotion.sh/docs/introduction)の`css`等のプロパティへ移動させる機能を提供するパッケージです。  
この機能は利用頻度の高いスタイル関連のプロパティを設定しやすくすることを目的に作成されました。

## インストール

```sh
npm install @gusok/react-style-props
```

## 使い方

### `applyStyleProps`

`applyStyleProps` は、スタイル関連のプロパティを `style`、`css`、`sx` などに適用します。

```tsx
import applyStyleProps from '@gusok/react-style-props';

const props = {
  xColor: 'red',
  xMargin: '10px',
  value: 'ABC',
};

const styledProps = applyStyleProps(props);
console.log(styledProps);
// 出力: { style: { color: "red", margin: "10px" }, value: "ABC" }
```

### `withStyledProps`

HOC を使用してスタイル関連のプロパティを統合する機能をコンポーネントへ追加できます。

```tsx
import { withStyledProps } from '@gusok/react-style-props';

const Box = (props: any) => <div {...props} />;
const StyledBox = withStyledProps(Box);

<StyledBox xWidth="100px" xHeight="200px" xBackgroundColor="red" />;
```

## オプション

`applyStyleProps` や `withStyledProps` に `StylePropsOptions` を渡すことで挙動をカスタマイズできます。

```tsx
// propsのcssWidthの値をcssプロパティのwidthに、cssHeightの値をheightに設定する
const options = {
  styleProp: 'css',
  propsMap: { cssWidth: 'width', cssHeight: 'height' },
};

// applyStylePropsの場合
const newProps = applyStyleProps(props, options);

// withStyledPropsの場合
const Box = (props: any) => <div {...props} />;
const StyledBox = withStyledProps(Box, options);
```

### `styleProp`

- `style`、`css`、`sx`、または任意のプロパティ
- スタイル関連のプロパティの設定先
- デフォルト: `style`

### `styleApplyMode`

- `merge`、`append`
- `styleProp`に指定したプロパティに値が設定されていた場合の動作
  - `merge`: 既存のプロパティ値がオブジェクトの場合はマージする
  - `append`: 既存のプロパティ値が配列の場合は追加、配列以外の場合は新たに配列を作成する
- デフォルト:
  - styleProp=`style`の場合: `merge`
  - styleProp=`css`の場合: `append`
  - styleProp=`sx`の場合: `append`
  - 上記以外の場合: `merge`

### `propsMap`

- `Record<string, keyof CSSProperties>`
- propsと`styleProp`で指定したプロパティ配下のキーのマッピング
- デフォルト: 下記の通り

```js
const propsMap = {
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
  xOpacity: 'opacity',
  xVisibility: 'visibility',
  xAlignItems: 'alignItems',
  xFlexDirection: 'flexDirection',
  xFlexWrap: 'flexWrap',
  xJustifyContent: 'justifyContent',
  xGap: 'gap',
  xFlex: 'flex',
  xFlexBasis: 'flexBasis',
  xFlexGrow: 'flexGrow',
  xFlexShrink: 'flexShrink',
  xDisplay: 'display',
  xOverflow: 'overflow',
  xBottom: 'bottom',
  xLeft: 'left',
  xPosition: 'position',
  xRight: 'right',
  xTop: 'top',
  xZIndex: 'zIndex',
  xHeight: 'height',
  xMaxHeight: 'maxHeight',
  xMaxWidth: 'maxWidth',
  xMinHeight: 'minHeight',
  xMinWidth: 'minWidth',
  xWidth: 'width',
  xBoxSizing: 'boxSizing',
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
```

## ライセンス

MIT License
