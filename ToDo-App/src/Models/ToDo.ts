
export class ToDo{
    public id: number;
    public naam:string;
    public persoon:string;
    public isDone:boolean;

    constructor(id: number, naam:string, persoon:string, isDone:boolean){
        this.id = id;
        this.naam = naam;
        this.persoon = persoon;
        this.isDone = isDone;
    }

}