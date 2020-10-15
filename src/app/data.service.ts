import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = "https://jsonblob.com/api/72c8ea44-0e0f-11eb-a6df-adbc65d200b9";

  constructor(private http: HttpClient) { }

  getJSON(){
    return this.http.get(this.url);
  }

}
