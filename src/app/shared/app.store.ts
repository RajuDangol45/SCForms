import { Injectable } from '@angular/core';
import { CustomInput } from '../models/custom-input.model';
import { Store } from './store';

@Injectable({
  providedIn: 'root'
})

export class AppStoreState {
  formTitle: string;
  formDescription: string;
  inputForm: CustomInput[];
  userInput: any;
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

  public setUserInput(input): void {
    this.setState({
      ...this.state,
      userInput: input
    });
  }
}
