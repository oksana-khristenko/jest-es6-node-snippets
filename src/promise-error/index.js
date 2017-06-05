const example = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('red');
    }, 0);
  });
}

export default example;