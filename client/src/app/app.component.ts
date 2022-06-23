import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;

  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get("https://localhost:5000/api/users").subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    }

    );
  }
}
