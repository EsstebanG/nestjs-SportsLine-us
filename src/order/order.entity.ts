import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { User } from '../user/user.entity';
import { Client } from '../client/client.entity';
import { Product } from '../product/product.entity';

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('date')
    orderDate: string;

    @ManyToOne(() => User, user => user.orders)
    user: User;

    @ManyToOne(() => Client, client => client.orders)
    client: Client;

    @ManyToOne(() => Product)
    product: Product;

    @Column('decimal')
    totalPrice: number;
}
