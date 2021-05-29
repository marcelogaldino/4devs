import { Repository, getRepository } from "typeorm";
import { Devs } from "../../entities/Devs";
import { IDevRepository, ICreateDevDTO } from "../IDevRepository";

class DevsRepository implements IDevRepository {
  private repository: Repository<Devs>

  constructor() {
    this.repository = getRepository(Devs)
  }
  async create({ data }: ICreateDevDTO): Promise<void> {
    const { nome, idade, sexo, hobby, datanascimento } = data

    const createDev = this.repository.create({ nome, idade, sexo, hobby, datanascimento })

    await this.repository.save(createDev)
  }

  async list(): Promise<Devs[]> {
    const allDevs = await this.repository.find()
    return allDevs
  }

  async findOne(id: string): Promise<Devs> {
    const findDev = await this.repository.findOne({ id })
    return findDev
  }

  async update(id: string): Promise<Devs> { }
  async delete(id: string): Promise<Devs> { }
}

export { DevsRepository }
