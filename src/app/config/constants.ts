import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Constants {
  public readonly API_ENDPOINT: string = 'http://172.20.10.3:3000';
}
