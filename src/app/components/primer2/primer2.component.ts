import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primer2',
  templateUrl: './primer2.component.html',
  styleUrls: ['./primer2.component.css']
})
export class Primer2Component implements OnInit {

  loading: boolean;
  data: Object;

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }

  makeReq(){
    this.loading = true;
    this.http
      .post(
        'https://jsonplaceholder.typicode.com/posts', 
        JSON.stringify({
          body: 'telo',
          title: 'naziv',
          userId: 5
        })
      )
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      });
  }

}
