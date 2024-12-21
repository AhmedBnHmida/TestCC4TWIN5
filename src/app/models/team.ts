import { participant } from "./participant";

export class team{ 
    id! : number; 
    name! : string; 
    projectName!:string ; 
    level!:string ; 
    participants !:participant[] ; 
    projectDescription! :string ; 
}