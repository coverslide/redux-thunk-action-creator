module.exports = function createThunkAction (thunk) {
  return function () {
    return thunk.apply(null, arguments);
  };
}