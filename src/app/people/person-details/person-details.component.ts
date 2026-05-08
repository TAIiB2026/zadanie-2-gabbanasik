import { Component, Input, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'taiib2-person-details',
  standalone: false,
  templateUrl: './person-details.component.html',
  styles: ``
})
export class PersonDetailsComponent implements OnInit {
 
 @Input() id?: number; 
  
 osoba: any;

 constructor(private personService: PersonService) { }

 ngOnInit() {
   if (this.id) {
     this.osoba = this.personService.getOnePerson(Number(this.id));
   }
 }
  
}
