import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

interface IData {
  name: FormControl<string>;
  phoneNumber: FormControl<string>;
  email: FormControl<string>;
  body: FormControl<string>;
}
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  postData(data: any, url: string) {
    console.log(url, data)
    return this.http.post(url, data);
  }
}
