import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Input() customInput: CustomInput;
  @Input() canRemoveItem: boolean;
  @Output() removeItem = new EventEmitter();

  constructor() { }

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
    this.selectedInputType = type;
  }

  public remove = (): void => {
    this.removeItem.emit(this.customInput.id);
  }

}
