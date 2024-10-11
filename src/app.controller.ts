import { Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('base')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('/post')
  postbase(){
    return this.appService.postbase();
  }

}
