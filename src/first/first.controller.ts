import { Body, Controller, Get, Post} from "@nestjs/common";
import { firstService } from "./first.service";
import { First } from "./first.model";

@Controller('first')
export class FirstController{
    constructor(private firstService: firstService) {}

    @Get()
    findAll(){
        return this.firstService.findAll();
    }

    @Post()
    create(@Body() first: First){
        return this.firstService.create(first)
    }
}
