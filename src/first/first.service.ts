import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { First } from './first.model';

@Injectable()
export class firstService {
  constructor(
    @InjectModel(First)
    private firstModel: typeof First) {}

  async create(first: First): Promise<First> {
    return this.firstModel.create(first);
  }

  async findAll(): Promise<First[]> {
    return this.firstModel.findAll();
  }
}
