// O(n)

export const findUniq = (numArray?: number[]): number | string => {
  const error: string = "Error";
  
  if (!numArray || numArray.length < 3) {
    return error;
  }

  const firstUniq = {
    value: numArray[0],
    times: 1
  };
  const secUniq = {
    value: undefined,
    times: 0
  };
  let i: number = 1;

  while (i < numArray.length){
    if (numArray[i] === firstUniq.value) {
      firstUniq.times++;
      i++;
    }
    if (numArray[i] !== firstUniq.value && secUniq.value === undefined) {
      secUniq.value = numArray[i];
      secUniq.times++;
      i++;
    }
    if (numArray[i] === secUniq.value) {
      secUniq.times++;
      i++;
    }
    if (secUniq.times > 1) {
      return firstUniq.value;
    }
    if (firstUniq.times > 1 && secUniq.times > 0) {
      return secUniq.value;
    }
  }
  return error;
};

