import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ISession, restrictedWords } from '../shared';

@Component({
  templateUrl: './create-session.component.html',
  styles: [`
    em { float:right; color: #E05C65; padding-left: 10px; }
    .error input, .error select, .error textarea { background: #E3C3C5; }
    .error ::-webkit-input-placeholder  { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class CreateSessionComponent implements OnInit {
  newSessionForm: FormGroup;
  name = new FormControl;
  presenter = new FormControl;
  duration = new FormControl;
  level = new FormControl;
  abstract = new FormControl;

  constructor(){}

  ngOnInit(){
    this.name = new FormControl('', Validators.required );
    this.presenter = new FormControl('', Validators.required );
    this.duration = new FormControl('', Validators.required );
    this.level = new FormControl('', Validators.required );
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])] );

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    })
  }

  saveSession(formValues){
    let session: ISession = {
      id: undefined,
      name: formValues.name,
      duration: Number(formValues.duration),
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: []
    }
    console.log(session);
    
  }

}