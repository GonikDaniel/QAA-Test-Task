import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  superForm: FormGroup;
  description: string = '';
  name: string = '';
  email: string = '';
  titleAlert: string = 'This field is required';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.superForm = this.fb.group({
      name: [null, Validators.required],
      description: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(30),
          Validators.maxLength(500)
        ])
      ],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      validate: ''
    });

    this.superForm.get('validate').valueChanges.subscribe(validate => {
      if (validate) {
        this.superForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
        this.titleAlert = 'You need to specify at least 3 characters';
      } else {
        this.superForm.get('name').setValidators(Validators.required);
      }
      this.superForm.get('name').updateValueAndValidity();
    });
  }

  addPost(model) {
    this.description = model.description;
    this.name = model.name;
    this.email = model.email;
  }
}
