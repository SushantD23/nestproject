import { Module } from "@nestjs/common";
import { FirstController } from "./first.controller";
import { firstService } from "./first.service";
import { RepoManager } from "src/repo.manager";


@Module({
    imports: [],
    providers: [firstService, RepoManager],
    controllers: [FirstController]
})

export class firstModule {}