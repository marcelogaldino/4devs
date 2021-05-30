import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("devs")
class Devs {
  @PrimaryColumn()
  id?: string;

  @Column()
  nome: string;

  @Column({ length: 1 })
  sexo: string;

  @Column()
  idade: number;

  @Column()
  hobby: string;

  @CreateDateColumn()
  datanascimento: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Devs };
