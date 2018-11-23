module.exports = function asyncMiddelware(handler) {
  return async (req, res, next) => {
    try {
      handler(req, res);
    } catch (ex) {
      next(ex);
    }
  }
}