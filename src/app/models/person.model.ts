export class Person {
    id: number;        
    firstName: string;   
    lastName: string;   
    height: number;     
    birthDate: Date;      
  

    constructor(id: number, firstName: string, lastName: string, height: number, birthDate: Date) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.height = height;
      this.birthDate = birthDate;
    }
  }