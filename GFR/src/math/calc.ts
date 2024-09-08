import { FormProps, NonNullableProperties } from "../types";

const age = 22;
const weight = 89.4;
// 肌酐
const creatine = 90;
const height = 181;
console.log("肾小球滤过率1: ", ((140 - age) * weight * 1.23) / creatine);

console.log(
  "肾小球滤过率2: ",
  Math.pow(91 / 88.4, -1.154) *
    Math.pow(age, -0.203) *
    Math.pow(weight, 0.425) *
    Math.pow(height, 0.725) *
    0.772
);

export const m1 = ({
  age,
  weight,
  creatine,
  sex,
}: NonNullableProperties<FormProps>) =>
  ((140 - age) * weight * (sex === "male" ? 1.23 : 1.03)) / creatine;
