//Array.prototype.sort();
//sort((a,b) => a - b); 오름차순
//sort((a,b) => b - a); 내림차순

//정수 배열 numbers가 매개변수로 주어집니다.
// numbers의 원소 중 두 개를 곱해 만들 수 있는
// 최댓값을 return하도록 solution 함수를 완성해주세요.

// (type: number) => number
const solution = (numbers) => {
  let numberList = numbers.sort((a, b) => b - a);
  return numberList[0] * numberList[1];
};

console.log(solution([1, 2, 3, 4, 5])); //20
console.log(solution([0, 31, 24, 10, 1, 9])); //744
