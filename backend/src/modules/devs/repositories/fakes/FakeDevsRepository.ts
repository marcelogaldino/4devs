import { Devs } from "../../entities/Devs";
import { IDevsRepository, ICreateDevDTO } from "../IDevsRepository";

class FakeDevsRepository implements IDevsRepository {
  private devs: Devs[] = []

  async create({ data }: ICreateDevDTO): Promise<void> {
    const { nome, idade, sexo, hobby, datanascimento } = data

    const dev = new Devs()

    Object.assign(dev, { id: "123", nome, idade, sexo, hobby, datanascimento })
    this.devs.push(dev)
  }

  async list(): Promise<Devs[]> {
    return this.devs
  }

  async paginatedList(start: number, limit: number): Promise<Devs[]> {
    return this.devs
  }

  async findOne(id: string): Promise<Devs> {
    const findDev = this.devs.find(dev => dev.id === id)
    return findDev
  }

  async update(id: string, { data }: ICreateDevDTO): Promise<Devs> {
    const { nome, idade, sexo, hobby, datanascimento } = data

    const findDev = this.devs.find(dev => dev.id === id)

    Object.assign(findDev, { nome, idade, sexo, hobby, datanascimento })

    this.devs.push(findDev)

    return findDev
  }

  async delete(id: string): Promise<void> {
    const findDevIndex = this.devs.findIndex(dev => dev.id === id)

    this.devs.splice(findDevIndex, 1)
  }
}

export { FakeDevsRepository }
