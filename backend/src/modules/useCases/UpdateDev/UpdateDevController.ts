import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateDevUseCase } from "./UpdateDevUseCase";

class UpdateDevController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const data = request.body

      const updateDev = container.resolve(UpdateDevUseCase)

      const devUpdated = await updateDev.execute(id, { data })

      return response.json(devUpdated)
    } catch (error) {
      return response.status(400)
    }
  }
}

export { UpdateDevController }
