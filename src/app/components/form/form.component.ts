import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  id: bigint | undefined;
  name: string | undefined;
  description: string | undefined;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
  }

  public createTarea() {
    let body = {id: this.id, name: this.name, description: this.description};
    let headers = new HttpHeaders({"Content-Type": "application/json"})
    this.httpClient.post("http://localhost:3000/todos/", body, {headers})
      .subscribe((res) =>
      console.log(res));
  }

  updateTarea() {
    let body = {id: this.id, name: this.name, description: this.description};
    let headers = new HttpHeaders({"Content-Type": "application/json"})
    this.httpClient.put("http://localhost:3000/todos/"+this.id, body, {headers})
      .subscribe((res) =>
        console.log(res));
  }

  goToTable() {

  }
}
