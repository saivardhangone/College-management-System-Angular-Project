import { Branch } from "./Branches";
import { Academic } from "./academic";

export class StudentDetails{
    public id!:number;
    public firstName!:string;
    public familyName!:string;
    public gender!:string;
    public mobileNumber!:string;
    public email!:string;
    public dob!:Date;
    public address!:string;
    public branch!:Branch;
    public academics: Academic[]=[];

}