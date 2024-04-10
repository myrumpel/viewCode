import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

interface data {
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
  postData(data: string, url: string) {
    return this.http.post<data>(url, data);
  }
}
