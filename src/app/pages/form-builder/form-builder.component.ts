import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomInput } from 'src/app/models/custom-input.model';
import { ToastrService } from 'ngx-toastr';
import { AppStore } from 'src/app/shared/app.store';
@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  inputsForm: FormGroup;
  questionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private appStore: AppStore
  ) {
    this.inputsForm = this.formBuilder.group({
      formTitle: ['', [Validators.required]],
      formDescription: ['', [Validators.required]],
      inputsFormArray: new FormArray([])
    });
  }

  get inputsFormArray(): FormArray {
    return this.inputsForm.controls.inputsFormArray as FormArray;
  }

  ngOnInit() {
    this.addDefaultInput();
  }

  addDefaultInput = (): void => {
    const questionForm = this.formBuilder.group({
      type: ['text', [Validators.required]],
      label: ['', [Validators.required]],
      placeholder: ['Question', []],
      options: [[''], []],
      required: [false, [Validators.required]],
    });
    this.inputsFormArray.push(questionForm);
  }

  removeItem = (itemId: number) => {
    const controlIndex = this.inputsFormArray.controls.findIndex(control => control.value.id === itemId);
    this.inputsFormArray.controls.splice(controlIndex, 1);
  }

  saveForm = () => {
    if (this.inputsForm.invalid) {
      this.toastr.error('Form Invalid');
      return;
    }

    this.setOptionsValues();
    this.appStore.setFormTitle(this.inputsForm.value.formTitle);
    this.appStore.setFormDescription(this.inputsForm.value.formDescription);
    this.appStore.setInputForm(this.inputsForm.value.inputsFormArray);
  }

  setOptionsValues = (): void => {
    this.inputsFormArray.controls.forEach((control, index) => {
      const optionCollection = Array.from(document.getElementsByClassName(`option-${index}`));
      const options = [];
      for (const option of optionCollection) {
        if ((option as any).value) {
          options.push((option as any).value);
        }
      }
      (control as FormGroup).controls.options.setValue(options);
    });
  }

  fillForm = () => {
    this.router.navigateByUrl(`form-filler`);
  }

}
