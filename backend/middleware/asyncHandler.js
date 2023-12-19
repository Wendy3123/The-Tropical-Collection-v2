const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

//so that we dont need to write out try{}catch{} for every route

export default asyncHandler;
