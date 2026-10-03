exports.generate = () => {
  return Math.random().toString(36).substring(2);
};

exports.validate = (token) => {
  return token && token.length > 5;
};
