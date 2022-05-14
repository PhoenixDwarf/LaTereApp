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
    securityq:string;
    securityqnumber:number;
    
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
export interface UpdateSecurity{
    securityNumber:number;
    securityAnswer:string;
}

export interface ChangePass{
    password:string;
}