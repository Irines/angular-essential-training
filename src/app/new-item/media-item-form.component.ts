import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { lookupListsToken } from '../providers';
import { MediaItemService } from '../services/media-item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
  form: FormGroup;

  // Any public properties in the Component class are available in the tamplate (HTML)
  constructor(
      private formBuiled: FormBuilder, 
      private mediaItemService: MediaItemService,
      @Inject(lookupListsToken) public lookupLists,
      private router: Router
    ) { }

  ngOnInit() {
    this.form = this.formBuiled.group({
      medium: this.formBuiled.control('Movies'),
      name: this.formBuiled.control('', Validators.compose([
        Validators.pattern('[\\w\\-\\s\\/]+'),
        Validators.required
      ])),
      category: this.formBuiled.control(''),
      year: this.formBuiled.control('', this.yearValidator)
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
      return {     
        minYear: 1900,
        maxYear: 2100
      };
    }
  }

  onSubmit(mediaItem) {
    this.mediaItemService.add(mediaItem).subscribe(() => {
      this.router.navigate(['/', mediaItem.medium])
    });
  }

}
