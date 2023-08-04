import express, { Application, Request, Response, NextFunction } from "express"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import session from 'express-session'
import "dotenv/config"
import { Auth } from "../routes/authentication"
import { User } from "../routes/user"

class App {
    public app: Application;
    public auth: Auth = new Auth();
    public user: User = new User();
    constructor() {
        this.app = express();
        this.config();
        this.auth.routes(this.app)
        this.user.routes(this.app)
    }

    private config(): void {
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        });
        this.app.use(session({
            resave: false,
            saveUninitialized: false,
            secret: `${process.env.SECRET}`,
            cookie: { maxAge: 60 * 60 * 24 },
        }))
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cookieParser())
    }
}

export default new App().app