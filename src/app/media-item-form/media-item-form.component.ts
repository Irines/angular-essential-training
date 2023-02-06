import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'mw-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      medium: new FormControl('Movies'),
      name: new FormControl('', Validators.compose([
        Validators.pattern('[\\w\\-\\s\\/]+'),
        Validators.required
      ])),
      category: new FormControl(''),
      year: new FormControl('', this.yearValidator)
    });
  }

  // if null is return - the field is valid, else the object should be returned (it is available on the form.errors property)
  yearValidator(control: FormControl) {
    if (control.value.trim().length === 0) {
      return null;
    }
    const year = parseInt(control.value)
    const minYear = 1900;
    const maxYear = 2100;
    if (year >= minYear && year <= maxYear) {
      return null;
    } else {
      return { year: true };
    }
  }

  onSubmit(mediaItem) {
    console.log(mediaItem)
  }

}
