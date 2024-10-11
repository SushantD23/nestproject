import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Req } from '@nestjs/common';
import { BookService } from './book.service';
import { createBook } from './dto/createBook.dto';

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) {}

    @Get()
    getALlBooks(@Req() req: Request){
        return this.bookService.getAllBooks(req)
    }

    @Get(':id')
    // @Bind(Param())
    getSpecificBook(@Param('id', ParseIntPipe) id: number){
        console.log(id);
        return this.bookService.getSpecificBook(id);
    }

    // @Post('/postingbook')
    // postABook(@Req() req: Request){
    //     return this.bookService.postABook(req);
    // }

    
    @Post('/postingbook')
    postABook(@Body() createbook: createBook){
        return this.bookService.postABook(createbook);
    }


    @Put('/update/:id')
    // @Bind(Param())
    updateBook(@Param() params:any){
        console.log(params.id);
        return this.bookService.updateBook(params.id);
    }

    @Delete('/deletebook/:id')
    // @Bind(Param())
    deleteBook(@Param() params:any){
        console.log(params.id);
        return this.bookService.deleteBook(params.id);    }

}
