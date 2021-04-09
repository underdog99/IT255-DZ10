import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primer4',
  templateUrl: './primer4.component.html',
  styleUrls: ['./primer4.component.css']
})
export class Primer4Component implements OnInit {

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
