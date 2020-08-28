import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {CollectionItem} from "./CollectionItem";

@Entity()
export class Collection {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => CollectionItem, item => item.collection)
    items: CollectionItem[];

}
