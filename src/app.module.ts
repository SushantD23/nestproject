import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookController } from './book/book.controller';
import { BookModule } from './book/book.module';
import { BookService } from './book/book.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [BookModule,
    SequelizeModule.forRoot(
      {
        dialect: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "PSQL12@",
        database: "testdb",
        autoLoadModels: true,
        synchronize: true,
      }
    ),
  ],
  controllers: [AppController, BookController],
  providers: [AppService, BookService],
})
export class AppModule {}
