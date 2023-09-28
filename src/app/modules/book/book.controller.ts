import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { BookService } from './book.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createBook = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await BookService.createBook(data);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Book created successfully',
    data: result,
  });
});

export const BookController = {
  createBook,
};
