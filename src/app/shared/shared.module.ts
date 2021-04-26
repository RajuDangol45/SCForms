import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CustomInputBuilderComponent } from './components/custom-input-builder/custom-input-builder.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,
    CustomInputBuilderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    CustomInputBuilderComponent
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class SharedModule { }
