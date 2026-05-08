import { Component } from '@angular/core';
import { Person } from '../../models/person.model';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'taiib2-person-list',
  standalone: false,
  templateUrl: './person-list.component.html',
  styles: ``
})
export class PersonListComponent  {
  listaOsob: Person[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.listaOsob = this.personService.getAll();
  }
}
