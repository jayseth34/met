import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-contactus',
    imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, CommonModule],
    templateUrl: './contactus.component.html',
    styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  contactForm: FormGroup;
  recipientEmail: string = 'Metallineblr@gmail.com';
 mapUrl: string = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.93721964868675!2d77.52507091503402!3d13.035957279577968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d397b9b2c33%3A0x10b393674b0a9f86!2sMetalline!5e0!3m2!1sen!2sin!4v1737208819528!5m2!1sen!2sin";
  safeUrl: SafeResourceUrl;

  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', Validators.required]
    });
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.mapUrl);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const { name, email, phone, message } = this.contactForm.value;
      const subject = `Contact Form Submission from ${name}`;
      const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
      const mailtoLink = `mailto:${this.recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoLink;
      this.contactForm.reset();
    }
  }
}
