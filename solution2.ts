// O(n^2)

export const findUniq = (numArray?: number[]): number | string => {
  if (!numArray || numArray.length < 3) {
    return "Error";
  }
  const [firstUniqNum] = numArray;
  const firstUniq = numArray.filter((num) => num === firstUniqNum);
  const secUniq = numArray.filter((num) => num !== firstUniqNum);

  return firstUniq.length > 2 ? secUniq[0] : firstUniqNum;
};

