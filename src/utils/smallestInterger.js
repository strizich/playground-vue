export const smallestInt = (num) => {
  num.sort((a, b) => a - b)
  return num.reduce((acc, val) => { 
    return acc === val ? acc + 1 : acc
  }, 1)
}

export const testUtil = (result, expected) => {
  return console.log(result === expected)
}


export function smallestPositiveInt(num) {
  let swap = (i) => {
    const j = num[i] - 1
    let tmp = num[i]
    num[i] = num[j]
    num[j] = tmp
  }
  
  for(let i = 0; i < num.length; i++) {
    while(
      0 < num[i]
      && num[i] - 1 < num.length
      && num[i] != i + 1
      // check negitive numbers
      && num[i] != num[num[i] + 1]
    ) {
      swap(i)
    }
  }
  
  for (let i = 0; i < num.length; i++) {
    if (num[i] != i + 1) {
      return i + 1
    }
  }
  
  return num.length + 1
}