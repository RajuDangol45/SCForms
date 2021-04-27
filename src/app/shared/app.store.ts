import { Injectable } from '@angular/core';
import { CustomInput } from '../models/custom-input.model';
import { UserInput } from '../models/user-input.model';
import { Store } from './store';

@Injectable({
  providedIn: 'root'
})

export class AppStoreState {
  formTitle: string;
  formDescription: string;
  inputForm: CustomInput[];
  userInputs: UserInput[];
}

export class AppStore extends Store<AppStoreState> {
  constructor() {
    super(new AppStoreState());
  }

  public setFormTitle(title: string): void {
    this.setState({
      ...this.state,
      formTitle: title
    });
  }

  public setFormDescription(desc: string): void {
    this.setState({
      ...this.state,
      formDescription: desc
    });
  }

  public setInputForm(inputs: CustomInput[]): void {
    this.setState({
      ...this.state,
      inputForm: inputs
    });
  }

  public setUserInputs(inputs: UserInput[]): void {
    this.setState({
      ...this.state,
      userInputs: inputs
    });
  }
}
