import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListDevUseCase } from "./ListDevUseCase";

class ListDevController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { start, limit } = request.query

    if (start || limit) {
      const listDevsPagination = container.resolve(ListDevUseCase)

      const allDevsPaginated = await listDevsPagination.executePagination(Number(start), Number(limit))

      return response.json(allDevsPaginated)

    } else {
      const listDevs = container.resolve(ListDevUseCase)

      const allDevs = await listDevs.execute()

      return response.json(allDevs)
    }

  }
}

export { ListDevController }
