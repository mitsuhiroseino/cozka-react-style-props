import {
  createElement,
  CSSProperties,
  ElementType,
  ForwardedRef,
  forwardRef,
  PropsWithoutRef,
} from 'react';
import applyStyleProps from './applyStyleProps';
import { StyleProps, StylePropsOptions, XStyleKeyMap } from './types';

/**
 * スタイル関連のプロパティをプロパティに指定できるコンポーネントを作成するHOC
 * @param Component
 * @param options
 * @returns
 */
export default function withStyledProps<
  P extends Record<string, any>,
  M extends Record<string, keyof CSSProperties> = XStyleKeyMap,
  T = unknown,
>(Component: ElementType<P>, options?: StylePropsOptions<M>) {
  return forwardRef(
    (props: PropsWithoutRef<P & StyleProps<M>>, ref: ForwardedRef<T>) => {
      const styleizedProps = applyStyleProps(props, options) as unknown as P;
      return createElement(Component, { ref, ...styleizedProps });
    },
  );
}
