import { CSSProperties, ComponentType } from 'react';
import applyStyleProps from './applyStyleProps';
import { DefaultStyleKeyMap, StyleProps, StylePropsOptions } from './types';

/**
 * スタイル関連のプロパティをプロパティに指定できるコンポーネントを作成するHOC
 * @param Component
 * @param options
 * @returns
 */
export default function withStyledProps<
  P extends Record<string, any>,
  M extends Record<string, keyof CSSProperties> = DefaultStyleKeyMap,
>(Component: ComponentType<P>, options?: StylePropsOptions<M>) {
  return (props: P & StyleProps<M>) => {
    const styleizedProps = applyStyleProps<P, M>(props, options);
    return <Component {...styleizedProps} />;
  };
}
