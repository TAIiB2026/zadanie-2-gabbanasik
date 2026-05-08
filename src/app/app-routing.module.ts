import { NgModule } from '@angular/core';
import { RouterModule, Routes, withComponentInputBinding } from '@angular/router';
import { PersonListComponent } from './people/person-list/person-list.component';
import { Komponent1Component } from './komponent1/komponent1.component';
import { Komponent2Component } from './komponent2/komponent2.component';
import { PersonDetailsComponent } from './people/person-details/person-details.component';

const routes: Routes = [
  { path: 'lista', component: PersonListComponent },
  { path: 'szczegoly/:id', component: PersonDetailsComponent },
  { path: 'jeden', component: Komponent1Component },
  { path: 'dwa', component: Komponent2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
