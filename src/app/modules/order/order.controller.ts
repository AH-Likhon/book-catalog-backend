import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { OrderService } from './order.service';
import sendResponse from '../../../shared/sendResponse';

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderService.createOrder(req.body, req?.user?.userId);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Order created successfully',
    data: result,
  });
});

export const OrderController = { createOrder };
