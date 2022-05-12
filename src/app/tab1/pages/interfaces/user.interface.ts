export interface User{
    name:  string;
    lastname: string;
    address:  string;
    neighborhood: string;
    phone: string;
    email: string;
    password: string;
}

export interface CompleteUser{
    address: string;
    neighborhood: string;
    email: string;
    id: number;
    isadmin: boolean;
    lastname: string;
    name: string;
    password: string;
    phone: string;
}

export interface CompleteUserWithSecurityq{
    address: string;
    neighborhood: string;
    email: string;
    id: number;
    isadmin: boolean;
    lastname: string;
    name: string;
    password: string;
    phone: string;
    securityq: string;
}