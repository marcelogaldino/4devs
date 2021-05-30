import { inject, injectable } from "tsyringe";
import { IDevsRepository } from "../../devs/repositories/IDevsRepository";

@injectable()
class DeleteDevUseCase {
  constructor(
    @inject("DevsRepository")
    private devsRepository: IDevsRepository
  ) { }

  async execute(id: string): Promise<void> {
    return await this.devsRepository.delete(id)
  }
}

export { DeleteDevUseCase }
