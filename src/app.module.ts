import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
/** import { UserModule } from './user/user.module'; // Suponiendo que vas a crear un módulo de usuarios. */
import { databaseConfig } from './dbconfig/connection'; // Importa la configuración

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Hace que las variables de entorno estén disponibles globalmente.
      envFilePath: `.env`, // Especifica el archivo .env que usarás.
    }),
    TypeOrmModule.forRoot(databaseConfig), // Usa la configuración importada aquí.
    // UserModule, -> Importa otros módulos que vayas a crear
  ],
})

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

export class AppModule {}
