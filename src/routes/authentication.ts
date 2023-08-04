import { Router } from 'express';
import { login, register } from '../controller/authentication';

export class Auth {
    public routes(route: Router): void {
        route.post('/auth/register', register)
        route.post('/auth/login', login)
    }
}