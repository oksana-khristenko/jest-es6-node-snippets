const example = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('orange');
    }, 0);
  });
}

export default example;