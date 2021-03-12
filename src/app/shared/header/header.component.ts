import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  SearchForm: FormGroup;
  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.start()
  }

  private start(){
    this.initializeForm()
  }

  private initializeForm(){
    this.SearchForm = this.formBuilder.group({
      search: [''],
    });
  }

   onSubmit(){
    console.log(this.SearchForm.value.search)
  }

}
