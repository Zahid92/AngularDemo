

export class User{

    id:number=0;

    name!:string;

    username!:string ;

    phone!:number;

    email!:string;

    constructor(id:number,name:string,username:string,phone:number){

        this.id=id;

        this.name=name;

        this.username=username;

        this.phone=phone;

    }

}