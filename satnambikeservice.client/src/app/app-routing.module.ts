import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';
import { BookingFormComponent } from './booking-form/booking-form.component';

const routes: Routes = [{ path: '', component: BookingFormComponent },
  { path: 'confirmation', component: BookingConfirmationComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
