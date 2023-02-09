import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss'],
})


export class TableDataComponent implements OnInit {

  listTodos: ITodo[] | any;
  values: string[] | any;

  constructor(private httpClient: HttpClient) {
  }


  ngOnInit() {
    this.httpClient.get('http://localhost:3000/todos/')
      .subscribe((res) => {
        this.values = Object.values(res);
        this.listTodos = this.values[1];
        console.log(this.values[1])
      });
  }


  deleteTodo(id: bigint) {
    let headers = new HttpHeaders({"Content-Type": "application/json"})
    this.httpClient.delete(`http://localhost:3000/todos/${id}`, {headers})
      .subscribe((res) => {
        console.log(res)
      });
    window.location.reload();
  }
}

export interface ITodo {
  id: bigint;
  name: string;
  description: string;
}
