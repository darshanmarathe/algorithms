function swap(arry, i, j) {
  const temp = arry[i];
  arry[i] = arry[j];
  arry[j] = temp;
}

export { swap };
