import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonDetailsComponent } from './person-details/person-details.component';

@NgModule({
  declarations: [
    PersonListComponent,
    PersonDetailsComponent
  ],
  imports: [
    CommonModule, 
    RouterModule  
  ],
  exports: [
    PersonListComponent,
    PersonDetailsComponent
  ]
})
export class PeopleModule { }