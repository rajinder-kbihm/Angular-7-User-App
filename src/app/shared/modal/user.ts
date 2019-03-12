export class User {
    constructor(
       public email : string,
       public firstName : string,
       public lastName : string,
       public age : number,
       public phone : number,
       public city : string,
       public pincode : string,
       public password : any
    ){}

    static fromJson({ email, firstName, lastName, age, phone, city, pincode, password }) {

    }

}
