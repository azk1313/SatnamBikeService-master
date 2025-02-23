import { Component } from '@angular/core';
import { FormBuilder, NgModel, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-booking-form',
  standalone: false,
  
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.css'
})
export class BookingFormComponent {
  bikeModel: string = '';
  serviceType: string = '';
  preferredTime: string = '';
  Name: string = '';
  Contact: number = 0;
  FullAddress: string = '';
  showMessage: boolean = false;  // Variable to control the message visibility
 availableDates: Date[] = [];
  date: any;
  form: any;
  Form: any;

  constructor(private router:Router,private fb: FormBuilder) {
    // Set min and max date for the current week
    const today = new Date();

    this.Form = this.fb.group({
      
      date: ['', Validators.required]  // Date field with required validator
    });
  
    this.generateNextSevenDaysExcludingThursdays();
  }

  generateNextSevenDaysExcludingThursdays() {
    let currentDate = new Date();
    let daysCount = 0;

    while (this.availableDates.length < 7) {
      // Move to the next day
      currentDate.setDate(currentDate.getDate() + 1);

      // Check if the day is not Thursday (3 = Thursday)
      if (currentDate.getDay() !== 4) {
        this.availableDates.push(new Date(currentDate));
      }
    }
  }

  
  

  // Handle form submission
  onSubmit(form:any) {
    if (form.valid) {
      this.router.navigate(['/confirmation']);
    } else {
      console.log('Form is not valid');
      this.showMessage = true; // Show the message if the form is invalid
    }
  }
}
