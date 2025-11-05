import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from '../order/order.entity';

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id_client: number;

    @Column()
    document: string;

    @Column()
    full_name: string;

    @Column()
    email: string;

    @OneToMany(() => Order, order => order.client)
    orders: Order[];
}
