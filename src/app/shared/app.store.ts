import { Injectable } from '@angular/core';
import { Store } from './store';

@Injectable({
  providedIn: 'root'
})

export class AceDemoState {
  formTitle: string;
}

export class AceDemoStore extends Store<AceDemoState> {
  constructor() {
    super(new AceDemoState());
  }

  public setFormTitle(title: string): void {
    this.setState({
      ...this.state,
      formTitle: title
    });
  }
}
