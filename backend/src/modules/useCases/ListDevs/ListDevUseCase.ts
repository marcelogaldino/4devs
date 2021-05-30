import { inject, injectable } from "tsyringe";
import { Devs } from "../../devs/entities/Devs";
import { IDevsRepository } from "../../devs/repositories/IDevsRepository";

@injectable()
class ListDevUseCase {
  constructor(
    @inject("DevsRepository")
    private devsRepository: IDevsRepository
  ) { }

  async execute(): Promise<Devs[]> {
    const allDevs = await this.devsRepository.list()

    return allDevs
  }

  async executePagination(start: number, limit: number): Promise<Devs[]> {
    const allDevsPaginated = await this.devsRepository.paginatedList(start, limit)

    return allDevsPaginated
  }
}

export { ListDevUseCase }
