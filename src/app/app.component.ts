import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private httpClient: HttpClient) { }
  title = 's2q2';
  f = new FormControl('');
  users: Array<any>;
  uf: Array<any>;
  ngOnInit(): void {
    this.getAllUsers(); // this is called on page load
  }
  getAllUsers() {
    this.httpClient.get('https://api.publicapis.org/categories')
      .subscribe(
        (response: Array<any>) => {
            this.users = response;
          },
        error => {
            console.log(error);
          }
      );
  }
  filtered(e) {
    console.log(e.target.value);
    this.uf = this.users.filter((i) => i.includes(this.f.value));
  }
}
