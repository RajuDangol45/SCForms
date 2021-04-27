import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomInput } from 'src/app/models/custom-input.model';
import { InputTypes } from '../../enums/input-types.enum';

@Component({
  selector: 'app-custom-input-builder',
  templateUrl: './custom-input-builder.component.html',
  styleUrls: ['./custom-input-builder.component.scss']
})
export class CustomInputBuilderComponent implements OnInit {
  public inputTypes: string[] = [];
  public selectedInputType: string = InputTypes.TEXT;
  public InputTypes = InputTypes;

  @Input() customInput: FormGroup;
  @Input() canRemoveItem: boolean;
  @Input() inputIndex: number;
  @Output() removeItem = new EventEmitter();

  constructor() { }

  get hasOptions(): boolean {
    return this.selectedInputType === InputTypes.CHECKBOX ||
      this.selectedInputType === InputTypes.RADIO_BUTTONS ||
      this.selectedInputType === InputTypes.SELECT ||
      this.selectedInputType === InputTypes.SWITCH;
  }

  get customInputValue(): CustomInput {
    return this.customInput.value;
  }

  get isRequired(): boolean {
    return this.customInputValue.required;
  }

  get canAddOption(): boolean {
    if (this.selectedInputType === InputTypes.SWITCH) {
      return this.customInputValue.options.length < 1;
    }
    return true;
  }

  get canRemoveOption(): boolean {
    return this.customInputValue.options.length > 1;
  }

  ngOnInit() {
    this.setInputTypes();
  }

  public setInputTypes = (): void => {
    for (const key in InputTypes) {
      if (Object.prototype.hasOwnProperty.call(InputTypes, key)) {
        const type = InputTypes[key];
        this.inputTypes.push(type);
      }
    }
  }

  public selectInputType = (type: string): void => {
    if (type === this.selectedInputType) {
      return;
    }

    this.selectedInputType = type;
    this.customInput.controls.type.setValue(this.selectedInputType);
  }

  public remove = (): void => {
    this.removeItem.emit(this.customInput.value.id);
  }

  public addOption = (): void => {
    this.customInputValue.options.push('');
  }

  public removeOption = (): void => {
    this.customInputValue.options.splice(this.customInputValue.options.length - 1);
  }

  public updateRequiredValue = (required: boolean) => {
    this.customInput.controls.required.setValue(required);
  }
}
