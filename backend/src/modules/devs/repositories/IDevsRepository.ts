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

interface IDevsRepository {
  create({ data }: ICreateDevDTO): Promise<void>
  list(): Promise<Devs[]>
  findOne(id: string): Promise<Devs>
  update(id: string, { data }: ICreateDevDTO): Promise<Devs>
  delete(id: string): Promise<void>
}

export { IDevsRepository, ICreateDevDTO }
