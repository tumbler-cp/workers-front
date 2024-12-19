export enum Role {
    USER,
    ADMIN
}

export interface User {
    id: number,
    username: string,
    password: string   
}

export interface Token {
    token: string
}