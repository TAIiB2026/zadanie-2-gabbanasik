import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';


@Injectable({
  providedIn: 'root'
})
export class PersonService {
  

 private bazaOsob:Person[] = [
    new Person(1, 'Adam', 'Nowak', 180, new Date('1995-03-12')),
    new Person(2, 'Jan', 'Kowalski', 165, new Date('1998-07-22')),
    new Person(3, 'Piotr', 'Zieliński', 192, new Date('1990-11-05')),
    new Person(4, 'Arek', 'Milik', 170, new Date('2001-01-30')),
    new Person(5, 'Robert', 'Lewandowski', 185, new Date('1988-08-21'))
  ];


  getAll() {
    return this.bazaOsob; 
  }


 getOnePerson(szukaneId: number) {
    let znaleziona = this.bazaOsob.find(osoba => osoba.id === szukaneId);

    if (znaleziona) {
      return new Person(
        znaleziona.id,
        znaleziona.firstName,
        znaleziona.lastName,
        znaleziona.height,
        znaleziona.birthDate
      );
    } 
    return null;
  }
}  