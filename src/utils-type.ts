/**
 * 全てのプロパティにキャメルケースでプレフィックスを付与する
 */
export type Prefixed<T extends Record<string, any>, Prefix extends string> = {
  [Key in keyof T as `${Prefix}${Capitalize<string & Key>}`]: T[Key];
};

/**
 * ユニオン型の値にキャメルケースでプレフィックスを付与する
 */
export type PrefixedUnion<U, Prefix extends string> = U extends string
  ? `${Prefix}${Capitalize<U>}`
  : U;
