import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// import { User } from '../user/user.entity'; Importa tus entidades

export const databaseConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [User],   // -> Lista de entidades que se usarán en la conexión.
    synchronize: true,  // -> Si está en producción, puedes ponerlo a false.
    logging: true,      // -> Opcional: habilitar logs SQL para desarrollo.
};
