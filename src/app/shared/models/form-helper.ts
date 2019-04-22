import { FormGroup } from '@angular/forms';

export class FormHelper {
  static markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  static getValidationClasses(form: FormGroup, field: string) {
    return {
      valid: form.get(field).valid,
      invalid: !form.get(field).valid && (form.get(field).touched || form.get(field).dirty)
    };
  }
}