import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookController } from './book/book.controller';
import { BookModule } from './book/book.module';
import { BookService } from './book/book.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { firstModule } from './first/first.module';
import { RepoManager } from './repo.manager';
import { First } from './first/first.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'PSQL12@',
      database: 'testdb',
      models: [First],
      autoLoadModels: true,
      synchronize: true,
    }),
    BookModule,
    firstModule,
  ],
  controllers: [AppController, BookController],
  providers: [RepoManager, AppService, BookService],
})
export class AppModule {}
