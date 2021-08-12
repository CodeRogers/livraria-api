import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table
export class Livro extends Model<Livro> {

    @Column({
        type: DataType.STRING(60),
        allowNull: false,
    })
    cod: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false,
    })
    price: number;
}