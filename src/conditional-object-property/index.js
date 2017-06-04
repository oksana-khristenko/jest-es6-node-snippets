const example = (obj) => {
  if (obj && obj.hasOwnProperty('val')) {
    return obj.val;
  }

  return 'gotcha';
}

export default example;