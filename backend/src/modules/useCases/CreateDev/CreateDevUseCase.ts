import { inject, injectable } from "tsyringe"

import { IDevsRepository } from "../../devs/repositories/IDevsRepository"

interface IRequest {
  nome: string;
  sexo: string;
  idade: number;
  hobby: string;
  datanascimento: Date;
}

@injectable()
class CreateDevUseCase {
  constructor(
    @inject("DevsRepository")
    private devsRepository: IDevsRepository
  ) { }

  async execute(data: IRequest): Promise<void> {
    await this.devsRepository.create({ data })
  }
}

export { CreateDevUseCase }
