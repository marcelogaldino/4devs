import { inject, injectable } from "tsyringe";
import { Devs } from "../../devs/entities/Devs";
import { IDevsRepository } from "../../devs/repositories/IDevsRepository";

@injectable()
class GetSpecificDevUseCase {
  constructor(
    @inject("DevsRepository")
    private devsRepository: IDevsRepository
  ) { }
  async execute(id: string): Promise<Devs> {
    const dev = await this.devsRepository.findOne(id)

    return dev
  }
}

export { GetSpecificDevUseCase }
