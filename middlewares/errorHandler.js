import { DEBUG_MODE } from "../config";
import { ValidationError } from 'joi';
import CustomErrorHandler from "../services/CustomErrorHandler";
const errorHandler = (err, req, res, next) => {
  let statuscode = 500;
  let data = {
    message: "Internal Server Error ",
    ...(DEBUG_MODE === 'true' && { originalError: err.message })

  }

  if (err instanceof ValidationError) {
    statuscode = 404;
    data = {
      message: err.message
    }
  }
  if (err instanceof CustomErrorHandler) {
    statuscode = err.status;
    data = {
      message: err.message
    }
  }
  return res.status(statuscode).json(data);
}
export default errorHandler;