import {Component} from '@angular/core';
import {ToastsManager} from 'ng2-toastr';

@Component({
  selector: 'my-cmp',
  template: `<button (click)="onClick()">Click</button>`
})
export class MyCmp {
  public constructor(public toastr: ToastsManager) {}
  onClick() {
    this.toastr.success('Hi there', 'Success');
  }
}
