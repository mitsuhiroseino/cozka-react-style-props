import createReactElement from '@cozka/react-utils/createReactElement';
import {
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
  T = unknown,
  M extends Record<string, keyof CSSProperties> = XStyleKeyMap,
>(Component: ElementType<P>, options?: StylePropsOptions<M>) {
  const { jsxRuntime = createReactElement, ...opts } = options || {};
  return forwardRef(
    (props: PropsWithoutRef<P & StyleProps<M>>, ref: ForwardedRef<T>) => {
      const styleizedProps = applyStyleProps(props, opts) as unknown as P;
      return jsxRuntime(Component, { ref, ...styleizedProps });
    },
  );
}
