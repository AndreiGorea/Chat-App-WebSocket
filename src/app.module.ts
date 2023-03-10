import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGateway } from './app/app.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from './entities/chat.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5438,
      username: 'user',
      password: 'password',
      database: 'postgres',
      entities: [Chat],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Chat]),
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
