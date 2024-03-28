import { ErrorCodes, ErrorMessages } from "../constants";

export const errorHandler = (error: any, req: any, res: any, next: any) => {
    const code = error.code || 500;
    const message = error.message || 'Oops! Something went wrong. Please try again.';
    console.log('hello =====>',error);
    return res.send(ErrorCodes.Internal).send(ErrorMessages.Generic);
    // res.status(code).json({
    //     code,
    //     message
}