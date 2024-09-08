export interface FormProps {
  age: number | null;
  weight: number | null;
  sex: "male" | "female";
  creatine: number | null;
}

export type NonNullableProperties<T> = {
  [K in keyof T]-?: Exclude<T[K], null>;
};
