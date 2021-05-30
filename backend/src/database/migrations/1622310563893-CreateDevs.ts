import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDevs1622310563893 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "devs",
      columns: [
        {
          name: "id",
          type: "uuid",
          isPrimary: true
        },
        {
          name: "nome",
          type: "varchar",
        },
        {
          name: "sexo",
          type: "char",
        },
        {
          name: "idade",
          type: "integer",
        },
        {
          name: "hobby",
          type: "varchar",
        },
        {
          name: "datanascimento",
          type: "date",
        },
        {
          name: "created_at",
          type: "timestamp",
          default: "now()"
        },
      ],
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("devs")
  }

}
