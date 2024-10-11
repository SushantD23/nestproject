import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import {  test } from './middleware/book.middleware';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(test)
    .forRoutes({path: 'book/postingbook', method: RequestMethod.ALL})
  }
}
