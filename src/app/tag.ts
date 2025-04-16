export class Tag {
    id : number; 
    name: string; 
    color: string; 

    constructor(name:string, color:string = '#000000', id: number = 0)
    {
        this.name = name; 
        this.color = color; 
        this.id = id; 
    }
}


