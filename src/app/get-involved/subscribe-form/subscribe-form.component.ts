import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';

import { Countries } from '../../shared/models/countries.constant';
import { FormHelper } from '../../shared/models/form-helper';
import { Supporter } from '../../shared/models/supporter';

@Component({
  selector: 'gp-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.scss']
})
export class SubscribeFormComponent implements OnInit {

  @Output() subscriptionSubmitted = new EventEmitter<Supporter>();

  form: FormGroup;
  countries = Countries;
  isLoading = true;
  genderOptions: {value: string, label: string}[];
  formHelper = FormHelper;

  constructor(private translateService: TranslateService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      country: ['Bolivia'],
      gender: ['female'],
      agreement: [true]
    });
  }

  ngOnInit() {
    this.translateService.get('get-involved.subscription.form.gender-options')
      .subscribe((genderOptions) => {
        this.genderOptions = Object.keys(genderOptions)
          .map((key: string) => ({ value: key, label: genderOptions[key] }));
        this.isLoading = false;
      });
  }

  onSubscribe() {
    if (!this.form.valid) {
      this.formHelper.markFormGroupTouched(this.form);
      return;
    }

    this.subscriptionSubmitted.emit(this.form.value);
  }
}
