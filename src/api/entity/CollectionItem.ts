import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";

import {Collection} from './Collection'

@Entity()
export class CollectionItem {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @ManyToOne(type => Collection, collection => collection.items)
    collection: Collection;

}
