/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express';
import { getEnvironmentVariables } from '../environments/env';
import UserDetail from '../models/User/UserAuthDetails';
export class UserController {
  static async getData(req: Request, res: Response, next: NextFunction) {
    try {
      const query = req.query;
      console.log(query);
      const user = await UserDetail.findOne(query);
      console.log(user);
      if (!user) {
        return res.status(200).json({
          data: {
            user: "User Not found"
          },
          sucess: true
        });
      }
      if (user) {
        // if user exists, get user data
        return res.status(200).json({
          data: {
            user: JSON.stringify(user)
          },
          success: true
        });
      }
    } catch (err) {
      next(err);
    }
  }
}
