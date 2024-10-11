import { HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

export function test(req: Request, res: Response, next: NextFunction){
    
    const ua = req.headers["user-agent"];
    console.log(ua, "from middleware");
    // req["ua"] = ua;

    next();
}
    
// @Injectable()
// export class classMiddleware implements NestMiddleware{
//     use(req: any, res: any, next: (error?: Error | any) => void) {
//         const ua = req.headers["user-agent"]
//         console.log(ua, "from class middleware")

//         if(!this.userAgent(ua)){
//             res.status(HttpStatus.FORBIDDEN).json({ message: "Not allowed form this browser"});
//             return;
//         }
//         req["ua"] = ua;
//         next();
//     }

//     private userAgent(agent: string){
//         const accepted = ["chrome", "mozilla"];

//         return accepted.some((accepts) =>
//             agent.toLowerCase().includes(accepts.toLowerCase())
//         );
//     }
// }

