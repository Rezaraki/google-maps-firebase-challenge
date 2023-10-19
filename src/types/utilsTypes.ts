export type Prettify<T> = { [K in keyof T]: T[K] } & {}

export type NonNullableFields<T> = Prettify<{
  [P in keyof T]: NonNullable<T[P]>
}>
