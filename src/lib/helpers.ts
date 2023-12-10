import { Person } from "@/types/types";

export const checkEmail = (mail: string): boolean => {
  // eslint-disable-next-line no-useless-escape
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(mail);
};

export const shuffle = (array: Person[], count = 0): Person[] => {
  console.log("--------------", count);
  console.log(array);

  const length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }

  let index = -1;
  const lastIndex = length - 1;
  const result = [...array];
  while (++index < length) {
    const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
    const value = result[rand];
    result[rand] = result[index];
    result[index] = value;
  }
  console.log(array);
  console.log(result);
  return array.find(
    (el, i) =>
      result.find((el2, i2) => el2?.id === el?.id && i === i2) !== undefined
  ) !== undefined
    ? shuffle(array, count + 1)
    : result;
};
