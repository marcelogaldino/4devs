import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteDevUseCase } from "./DeleteDevUseCase";

class DeleteDevController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params

      const deleteDevUseCase = container.resolve(DeleteDevUseCase)

      await deleteDevUseCase.execute(id)

      return response.status(204).send()
    } catch (error) {
      return response.status(400)
    }
  }
}

export { DeleteDevController }
