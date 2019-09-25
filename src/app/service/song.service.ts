import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Song} from "../song";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private song_URL = "http://localhost:8080/api/song";

  constructor(private http: HttpClient) {


  }
}
