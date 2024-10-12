import { Injectable } from "@nestjs/common";

@Injectable()
export class RepoManager {
    constructor() {}

    async create(table, creationData) {
        const data = await table.create(creationData);
        console.log(data)
    }
}