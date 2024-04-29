const errorMiddleWare = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Backend Error";
  const extraDetails = err.extraDetails || "getting error from backend";

  return res.status(status).json({ message, extraDetails });
};

module.exports = errorMiddleWare;
