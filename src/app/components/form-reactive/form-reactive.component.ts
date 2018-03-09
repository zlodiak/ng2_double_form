import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent implements OnInit {

  currPass: string = '123456';
  questions: string[] = [
    'первый вопрос',
    'второй вопрос',
    'третий вопрос'
  ];
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'currPass':         new FormControl(null, [ Validators.required, 
                                                  Validators.minLength(6), 
                                                  Validators.maxLength(10)], this.checkCurrPass.bind(this)),
      'newPass':          new FormControl(null, [ Validators.required, 
                                                  Validators.minLength(6), 
                                                  Validators.maxLength(10)], this.checkPattern.bind(this)),
      'newPassConfirm':   new FormControl(null, [ Validators.required,
                                                  Validators.minLength(6), 
                                                  Validators.maxLength(10)], [this.checkPattern.bind(this), this.checkconfirm.bind(this)]),
      'newLogin':         new FormControl(null, [ Validators.required, 
                                                  Validators.minLength(6), 
                                                  Validators.maxLength(10)]),
      'question':         new FormControl(null, Validators.required),
      'answer':           new FormControl(null, [ Validators.required, 
                                                  Validators.minLength(1), 
                                                  Validators.maxLength(30)]),
      'personalData':     new FormControl(null,   [], this.checkCheckbox.bind(this)),                                                  
    });    
  }

  checkCheckbox(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(control);
        if(control.value === true) {
          resolve(null);
        } else {
          resolve({checkCheckbox: true});
        } 
      });     
    });
  }  

  checkCurrPass(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value === this.currPass) {
          resolve(null);
        } else {
          resolve({checkCurrPass: true});
        } 
      });     
    });
  }

  checkPattern(control: FormControl): Promise<any>  {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = /[^A-ZА-Яa-zа-я\d!@#%&*;‘:“,./?.]/.test(control.value);
        if(!result) {
          resolve(null);
        } else {
          resolve({checkPatternNewPass: true});
        } 
      });     
    });
  }

  checkconfirm(control: FormControl): Promise<any>  {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value === this.form.value.newPass) {
          resolve(null);
        } else {
          resolve({checkPatternNewPass: true});
        } 
      });     
    });
  }  

  onSubmit(): void {
    console.log('submit', this.form);
    alert('form is submit');
  }

  look() {
    console.log(this.form);
  }

}
