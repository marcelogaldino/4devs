import { Devs } from '../entities/Devs'

interface IDataDevDTO {
  nome: string;
  sexo: string;
  idade: number;
  hobby: string;
  datanascimento: Date;
}

interface ICreateDevDTO {
  data: IDataDevDTO;
}

interface IDevRepository {
  create(data: ICreateDevDTO): Promise<void>
  list(): Promise<Devs[]>
  findOne(id: string): Promise<Devs>
  update(id: string): Promise<Devs>
  delete(id: string): Promise<Devs>
}

export { IDevRepository, ICreateDevDTO }
