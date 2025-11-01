function throttle(func, limit) {
  let flag = true;
  return (...args) => {
    if (flag) {
      func(...args);
      flag = false;
      setTimeout(() => flag = true, limit);
    }
  };
}