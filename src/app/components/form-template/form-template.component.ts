import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss']
})
export class FormTemplateComponent implements OnInit {

  form: Object = {
    currPass: null,
    newPass: null,
    newPassConfirm: null,
    newLogin: null,
    question: null,
    answer: null,
    personalData: null
  };

  errors: Object = {
    currPass: [],
    newPass: [],
    newPassConfirm: [],
    newLogin: [],
    question: [],
    answer: [],
    personalData: []
  };

  currPass = '123456';

  questions: string[] = [
    'первый вопрос',
    'второй вопрос',
    'третий вопрос'
  ];  

  constructor() { }

  ngOnInit() {
  }

  onSubmit(): void {
    alert('form is submit');
  }

  validateField(field): void {
    console.log(field);
  }

  isDisabledSubmitBtn(): boolean {
    let isDisabled = true;

    if(
      !this.errors.currPass.length && this.form.currPass &&
      !this.errors.newPass.length && this.form.newPass &&
      !this.errors.newPassConfirm.length && this.form.newPassConfirm &&
      !this.errors.newLogin.length && this.form.newLogin &&
      this.form.question &&
      !this.errors.answer.length && this.form.answer &&
      !this.errors.personalData.length && this.form.personalData
    ) 
    {
      isDisabled = false;
    }

    return isDisabled;
  }

}
