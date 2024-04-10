import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClearPhoneNumberService {
  toClear(phone: string) {
    return phone.replace(/[^\d+]/g, '');
  }
}
