import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormBuilderComponent } from './pages/form-builder/form-builder.component';
import { FormFillerComponent } from './pages/form-filler/form-filler.component';
import { FormViewComponent } from './pages/form-view/form-view.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'form-builder',
    pathMatch: 'full'
  },
  {
    path: 'form-builder',
    component: FormBuilderComponent,
  },
  {
    path: 'form-filler',
    component: FormFillerComponent,
  },
  {
    path: 'form-view',
    component: FormViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
