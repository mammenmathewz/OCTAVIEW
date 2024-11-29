export class UserEntity {
    constructor(
        public id: string,  
        public email: string,
        public password: string,
        public companyName: string
    ) {}
}


export class OtpEntity{
    constructor(public email:string,public otp:string,public expiry:number){}
}
