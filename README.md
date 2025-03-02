# @gusok/react-style-props

`@gusok/react-style-props` is a package that moves style-related properties set in component props to properties like React's standard `style` or Emotion's `css`.
This feature is designed to make it easier to set frequently used style-related properties.

**[日本語の README はこちら](./README.ja.md)**

## Installation

```sh
npm install @gusok/react-style-props
```

## Usage

### `applyStyleProps`

`applyStyleProps` applies style-related properties to `style`, `css`, `sx`, etc.

```tsx
import applyStyleProps from '@gusok/react-style-props';

const props = {
  xColor: 'red',
  xMargin: '10px',
  value: 'ABC',
};

const styledProps = applyStyleProps(props);
console.log(styledProps);
// Output: { style: { color: "red", margin: "10px" }, value: "ABC" }
```

### `withStyledProps`

You can use an HOC to integrate style-related properties into a component.

```tsx
import { withStyledProps } from '@gusok/react-style-props';

const Box = (props: any) => <div {...props} />;
const StyledBox = withStyledProps(Box);

<StyledBox xWidth="100px" xHeight="200px" xBackgroundColor="red" />;
```

## Options

You can customize the behavior of `applyStyleProps` and `withStyledProps` by passing `StylePropsOptions`.

```tsx
// Map cssWidth to the width property and cssHeight to the height property inside the css prop
const options = {
  styleProp: 'css',
  styleKeyMap: { cssWidth: 'width', cssHeight: 'height' },
};

// For applyStyleProps
const newProps = applyStyleProps(props, options);

// For withStyledProps
const Box = (props: any) => <div {...props} />;
const StyledBox = withStyledProps(Box, options);
```

### `styleProp`

- `style`, `css`, `sx`, or any other property
- The destination for style-related properties
- Default: `style`

### `styleApplyMode`

- `merge`, `append`
- Defines behavior when an object is already set on the property specified in `styleProp`
  - `merge`: Merge the objects
  - `append`: Add to an array
- Default: `merge`

### `styleKeyMap`

- `Record<string, keyof CSSProperties>`
- A mapping of props to the keys under the property specified in `styleProp`
- Default:

```js
const styleKeyMap = {
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

## License

MIT License
