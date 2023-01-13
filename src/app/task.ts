export class Task {
  constructor(public id:number, public title:string, public status:string, public category:string, public desc:string){}
  get getId(){return this.id;}
  set setId(id:number){this;id=id}

  get getTitle(){return this.title}
}
