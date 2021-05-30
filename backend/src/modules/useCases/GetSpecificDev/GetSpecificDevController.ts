import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetSpecificDevUseCase } from "./GetSpecificDevUseCase";

class GetSpecificDevController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params

      const getSpecificDev = container.resolve(GetSpecificDevUseCase)

      const dev = await getSpecificDev.execute(id)

      if (!dev) return response.status(404).json({ error: "Dev not found" })

      return response.json(dev)

    } catch (error) {
      return response.status(404).json({ error: "Dev not found" })
    }
  }
}

export { GetSpecificDevController }
