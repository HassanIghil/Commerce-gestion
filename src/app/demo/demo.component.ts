import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [FormsModule, CommonModule, NgIf,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  fullName: string = '';
  email: string = '';
  message: string = '';
  confirmationMessage: string = '';

  public onSubmit(e: Event) {
    e.preventDefault();

    emailjs.send('service_dawiliq', 'template_2tsqpcb', {
      from_name: this.fullName,
      from_email: this.email,
      message: this.message
    }, 'ZieQ7Ki8EODFZ_rKz')
    .then(
      (result) => {
        this.confirmationMessage = 'Message Sent!';
        this.clearForm();
      },
      (error) => {
        console.log('FAILED...', (error as EmailJSResponseStatus).text);
        this.confirmationMessage = 'Failed to send message. Please try again.';
      }
    );
  }

  clearForm() {
    this.fullName = '';
    this.email = '';
    this.message = '';
  }
}
