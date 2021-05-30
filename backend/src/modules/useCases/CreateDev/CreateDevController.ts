import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateDevUseCase } from "./CreateDevUseCase";

class CreateDevController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = request.body;

      const createDevUseCase = container.resolve(CreateDevUseCase);

      await createDevUseCase.execute(data);

      return response.status(201).send();
    } catch (error) {
      return response.status(400).send();
    }
  }
}

export { CreateDevController };
