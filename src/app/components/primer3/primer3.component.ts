import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primer3',
  templateUrl: './primer3.component.html',
  styleUrls: ['./primer3.component.css']
})
export class Primer3Component implements OnInit {

  loading: boolean;
  data: Object;

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
