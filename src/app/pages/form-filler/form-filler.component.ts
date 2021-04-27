import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomInput } from 'src/app/models/custom-input.model';
import { AppStore, AppStoreState } from 'src/app/shared/app.store';
import { InputTypes } from 'src/app/shared/enums/input-types.enum';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-filler',
  templateUrl: './form-filler.component.html',
  styleUrls: ['./form-filler.component.scss']
})
export class FormFillerComponent implements OnInit {
  public formTitle: string;
  public formDescription: string;
  public customForm: CustomInput[];
  public InputTypes = InputTypes;
  public responseForm: FormGroup;

  constructor(
    private appStore: AppStore,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.responseForm = new FormGroup({});
  }

  ngOnInit() {
    const state = this.appStore.state;
    this.setFormValues(state);
    this.setForm();
  }

  setFormValues = (state: AppStoreState) => {
    this.formTitle = state.formTitle;
    this.formDescription = state.formDescription;
    this.customForm = state.inputForm;
  }

  setForm = (): void => {
    this.customForm.forEach((control) => {
      switch (control.type) {
        case InputTypes.CHECKBOX:
        case InputTypes.RADIO_BUTTONS:
          const formArray = new FormArray([]);
          control.options.forEach((option, index) => {
            formArray.controls.push(new FormControl(false));
          });
          this.responseForm.addControl(control.label, formArray);
          break;
        default:
          this.responseForm.addControl(control.label, new FormControl('', control.required ? Validators.required : []));
      }
    });
  }

  saveDetails = () => {
    if (this.responseForm.invalid) {
      this.toastr.error('Form Invalid');
      return;
    }

    this.appStore.setUserInput(this.responseForm.value);
    this.router.navigateByUrl('form-view');
  }

}
