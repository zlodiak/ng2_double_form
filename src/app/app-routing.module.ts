import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';
import { FormTemplateComponent } from './components/form-template/form-template.component';

const routes: Routes = [
  {path: '', redirectTo: '/reactive-form', pathMatch : 'full'},
  {path : 'reactive-form', component : FormReactiveComponent},
  {path : 'template-form', component : FormTemplateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
