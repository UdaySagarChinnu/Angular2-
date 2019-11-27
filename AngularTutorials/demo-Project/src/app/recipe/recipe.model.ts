
import { Ingridents } from './../shared/Ingridents.model';
export class Recipe{
    name:string;
    description:string;
    image:string;
    ingridents:Ingridents[];
    

    constructor( name:string,description:string,image:string,ingridents:Ingridents[]){
        this.name=name;
        this.description=description;
        this.image=image;
        this.ingridents=ingridents;
       

    }

}