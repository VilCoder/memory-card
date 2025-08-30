export function getRandomArray(array) {
  const newArray = [...array];
  const randomArray = [];

  while (newArray.length > 0) {
    const index = Math.floor(Math.random() * newArray.length);
    const item = newArray.splice(index, 1);
    randomArray.push(item);
  }
  
  return randomArray.flat();
}