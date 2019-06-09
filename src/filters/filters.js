const filters = {
  toFiat: (number, currency = "$") => {
    return `${currency}${number.toLocaleString()}`;
  }
};

export default filters;
