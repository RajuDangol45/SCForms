import { Component, OnInit } from '@angular/core';
import { CustomInput } from 'src/app/models/custom-input.model';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  inputs: CustomInput[] = [];

  constructor() { }

  ngOnInit() {
    this.addDefaultInput();
  }

  addDefaultInput = (): void => {
    const defaultInput: CustomInput = {
      id: this.inputs.length,
      label: '',
      type: 'text',
      placeholder: 'Question'
    };
    this.inputs.push(defaultInput);
  }

  removeItem = (itemId: number) => {
    this.inputs = this.inputs.filter((input) => input.id !== itemId);
  }

}
