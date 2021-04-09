import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primer1',
  templateUrl: './primer1.component.html',
  styleUrls: ['./primer1.component.css']
})
export class Primer1Component implements OnInit {

  data: Object;
  loading: boolean;

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }

  makeReq(){
    this.loading = true;
    this.http
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      });
  }

}
