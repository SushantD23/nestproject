import { IsNumber, IsString } from "class-validator";

export class createBook{
    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsString()
    author: string;
}