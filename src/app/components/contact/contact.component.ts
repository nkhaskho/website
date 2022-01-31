import { Component, OnInit } from '@angular/core';
import { EmailForm } from 'src/app/models/email-form';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  emailForm: EmailForm = new EmailForm();
  errorMessage: string = "";

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
  }

  send() {
    if (this.emailForm.isValid()) {
      this.emailService.sendEmail(this.emailForm);
      this.errorMessage = "1"
    } else {
      this.errorMessage = this.emailForm.validate();
    }
  }

}
