import { Injectable, Param, Req } from '@nestjs/common';
import { createBook } from './dto/createBook.dto';

@Injectable()
export class BookService {
    getAllBooks(req){
        console.log(req.headers['user-agent'], "from service");
        return 'this returns all book'
    }
    getSpecificBook(id : number){
        return ['This return the book with the matching id', {
            "id": id,
        }];
    }

    postABook(createbook: createBook){
        // console.log(req.body)
        return ['Post added', createbook];
    }
    updateBook(id : any){
        return `this update the book with ${id} id`;
    }

    deleteBook(id : any){
        return `this delete the book with ${id} id`;
    }
}
