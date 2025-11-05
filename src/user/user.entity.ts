import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from '../order/order.entity'; // <- Importamos la entidad 'Order' para la relación. 

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id_user: number;

    @Column()
    full_name: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @OneToMany(() => Order, order => order.user)
    orders: Order[];
}
