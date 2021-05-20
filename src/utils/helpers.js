export function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export function getRandomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}
