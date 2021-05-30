import { inject, injectable } from "tsyringe";
import { Devs } from "../../devs/entities/Devs";
import { ICreateDevDTO, IDevsRepository } from "../../devs/repositories/IDevsRepository";

@injectable()
class UpdateDevUseCase {
  constructor(
    @inject("DevsRepository")
    private devsRepository: IDevsRepository
  ) { }

  async execute(id: string, { data }: ICreateDevDTO): Promise<Devs> {

    const updatedDev = await this.devsRepository.update(id, { data })

    return updatedDev
  }
}

export { UpdateDevUseCase }
