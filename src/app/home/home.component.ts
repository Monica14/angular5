import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  title: string;
  username:string;
  public baseUrl = 'http://localhost:3000';
  private GETLiveUrl = this.baseUrl + '/liveValue';
  private  checkUsername = this.baseUrl + '/auth/checkUsername';
  constructor(private http: Http) {
    this.http = http;
  }

  ngOnInit() {
    //this.title = 'Hello world!';
    //this.getcall();
  }

  onClicked() {
    //alert("asaSA");
    this.title = 'Hello world!';
    this.getcall().then(data => {
      console.log(data);
    })
  }

  getdata()
  {
    this.fetchdata({"userName":this.username}).then(data => {
      console.log("data");
    });
  }

  getcall():Promise<any>
  {
    return this.http.get(this.GETLiveUrl).map(res=>res.json()).toPromise().catch((error:any)=>Observable.throw(error.json().error || 'Server error'));
    //alert("Clicked");
  }

  fetchdata(body):Promise<any>
  {
    return this.http.post(this.checkUsername,JSON.stringify(body)).map(res=>res.json()).toPromise().catch((error:any)=>Observable.throw(error.json().error || 'Server error'));
  }

}
