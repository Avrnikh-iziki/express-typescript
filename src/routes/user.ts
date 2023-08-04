import { Router } from 'express';
import { getAllUsers, deletuser, updateuser } from "../controller/user"
import { isAutenticated, isOwner } from "../middlewares/index"
export class User {
    public routes(route: Router): void {
        route.get('/user', isAutenticated, getAllUsers)
        route.delete('/user/:id', isAutenticated, isOwner, deletuser)
        route.patch('/user/:id', isAutenticated, isOwner, updateuser)
    }
}