import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListDevUseCase } from "./ListDevUseCase";

class ListDevController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listDevs = container.resolve(ListDevUseCase)

    const allDevs = await listDevs.execute()

    return response.json(allDevs)
  }
}

export { ListDevController }
