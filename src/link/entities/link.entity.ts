import { Table, Column, Model, PrimaryKey,DataType } from 'sequelize-typescript';

@Table({
    tableName: "links",
    modelName: "link",
    timestamps: false
})
export class Link extends Model {
    @PrimaryKey
    @Column(DataType.STRING)
    url: string

    @PrimaryKey
    @Column(DataType.STRING)
    short_url: string

    @Column
    @Column(DataType.DATE)
    createdAt?: Date

    @Column
    @Column(DataType.DATE)
    end_date: Date
}