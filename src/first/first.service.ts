import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { First } from './first.model';
import { RepoManager } from 'src/repo.manager';

@Injectable()
export class firstService {
  constructor(
   private readonly repo: RepoManager) {}

  async create(creationData: First): Promise<any> {
    return await this.repo.create(First, creationData)
  }

  async findAll() {
    return {}
  }
}
