import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Worlddd!';
  }
  postbase(): string{
    return 'Posted';
  }
}
