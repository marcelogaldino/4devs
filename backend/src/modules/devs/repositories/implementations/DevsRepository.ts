import { Repository, getRepository } from "typeorm";
import { Devs } from "../../entities/Devs";
import { IDevsRepository, ICreateDevDTO } from "../IDevsRepository";

class DevsRepository implements IDevsRepository {
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

  async update(id: string, { data }: ICreateDevDTO): Promise<Devs> {
    const { nome, idade, sexo, hobby, datanascimento } = data

    const findDev = await this.repository.findOne({ id })

    Object.assign(findDev, {
      nome,
      idade,
      sexo,
      hobby,
      datanascimento
    })

    return await this.repository.save(findDev)
  }
  async delete(id: string): Promise<void> {
    const findDev = await this.repository.findOne({ id })

    await this.repository.remove(findDev)

    return
  }
}

export { DevsRepository }
