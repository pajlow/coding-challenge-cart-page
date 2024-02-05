import { randomUUID } from 'crypto'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class InitialSeed1706777475889 implements MigrationInterface {
  name = 'InitialSeed1706777475889'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "shopping_cart_item" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "brandName" varchar NOT NULL, "color" varchar NOT NULL, "size" varchar NOT NULL, "isSustainable" boolean NOT NULL, "price" float NOT NULL, "percentReduced" integer NOT NULL, "isNewArrival" boolean NOT NULL, "amount" integer NOT NULL, "image" varchar NOT NULL)`
    )
    await queryRunner.query(
      `INSERT INTO "shopping_cart_item"("id", "name", "brandName", "color", "size", "isSustainable", "price", "percentReduced", "isNewArrival", "amount", "image")
      VALUES
      ("${randomUUID()}", "Regular fit: linen blend trousers", "QS by s.oliver", "Deep Blue", "S", true, 49.99, 48, false, 1, "2131600"),
      ("${randomUUID()}", "s.Oliver print T-shirt", "s.oliver", "Dark Blue", "S", false, 15.99, 0, true, 1, "2152232"),
      ("${randomUUID()}", "Stretch cotton cargo trousers", "QS by s.oliver", "Dark Grey", "29/32", true, 59.99, 43, false, 1, "2140445")`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "shopping_cart_item"`)
  }
}
