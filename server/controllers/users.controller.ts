import { Request, Response } from "express";
import Responder from "../helpers/responder";
import UsersModel, { IUsers } from "../models/users.model";

const Users = UsersModel.getModel();

const responder = new Responder();

/**
 * UsersController
 */
class UsersController {
  /**
   * @param  {Request} req
   * @param  {Response} res
   * @return {void}
   */
  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const usersFound: Array<IUsers> = await Users.find();

      if (usersFound.length > 0) {
        responder.success(200, "successfully got users list", usersFound);
      } else {
        responder.success(200, "No tutorials found");
      }

      responder.send(res);
    } catch (err) {
      responder.error(400, err.message);
      responder.send(res);
    }
  }
}

export default UsersController;
