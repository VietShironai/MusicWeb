import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(public http: HttpClient) {}

  ngOnInit() {
  }

  test() {
    //1. hien thi token tu cockie
    var token = sessionStorage.getItem('token');
    var outToken = document.getElementById("outToken");
    outToken.innerHTML = token;

    //2. khai bao the div de hien thi data khi goi: restful;
    var out = document.getElementById("output");

    //3. call restful va hien thi ket qua tra ve vao the div co id = "output"
    this.http.get('http://localhost:8080/api/users')
        .subscribe(
          data => {out.innerHTML = "output:"+JSON.stringify(data)}, // ham xu ly ket qua tra ve khi call restful, va convert object ra chuoi JSON
          err => console.log(err)
      );
  }

  logout() {
    //1. remove token from cookies
    sessionStorage.removeItem("token");
    //2. remove username;

    // hien thi cookie de test
    var token = sessionStorage.getItem('token');
    var outToken = document.getElementById("outToken");
    outToken.innerHTML = token;
  }
}
