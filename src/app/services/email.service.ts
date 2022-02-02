import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EmailForm } from '../models/email-form';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpClient: HttpClient) { }

  sendEmail(emailForm: EmailForm) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.httpClient.post(environment.emailEndpoint, emailForm, { headers: headers });
  }

}
