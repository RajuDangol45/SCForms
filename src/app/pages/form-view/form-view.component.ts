import { Component, OnInit } from '@angular/core';
import { CustomInput } from 'src/app/models/custom-input.model';
import { AppStore } from 'src/app/shared/app.store';
import { InputTypes } from 'src/app/shared/enums/input-types.enum';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.scss']
})
export class FormViewComponent implements OnInit {
  public customForm: CustomInput[];
  public userInput: any[];
  public InputTypes = InputTypes;

  constructor(
    private appStore: AppStore
  ) { }

  ngOnInit() {
    this.userInput = this.appStore.state.userInput;
    this.customForm = this.appStore.state.inputForm;
  }

}
