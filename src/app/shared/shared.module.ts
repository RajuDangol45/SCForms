import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CustomInputBuilderComponent } from './components/custom-input-builder/custom-input-builder.component';
import { CommonModule } from '@angular/common';
import { AppStore } from './app.store';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    CustomInputBuilderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    CustomInputBuilderComponent
  ],
  entryComponents: [
  ],
  providers: [
    AppStore
  ]
})
export class SharedModule { }
