import { DEFAULT_DECIMAL, DEFAULT_INTEGER } from 'src/constants';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAccountTable1720007733250 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'accounts',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'balance',
            type: 'decimal',
            precision: DEFAULT_INTEGER,
            scale: DEFAULT_DECIMAL,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('accounts');
  }
}
