const handleSuccess = ({ res, statusCode = 200, message = "Ok", ...rest }) => {
  return res.status(statusCode).json({ message, ...rest });
};

const handleError = ({ res, statusCode = 500, message = "Error", ...rest }) => {
  return res.status(statusCode).json({ message, ...rest });
};

module.exports = { handleSuccess, handleError };
