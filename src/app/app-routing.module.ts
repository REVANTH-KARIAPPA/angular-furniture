import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-customer/board-user.component';
import { BoardModeratorComponent } from './board-seller/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
<<<<<<< HEAD
import { PaymentComponent } from './payment/payment.component';
import { FooterComponent } from './footer/footer.component';
=======
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
>>>>>>> 0ee6e8e61a044edc09b4cb2e1e8131305b0e4ae2

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pay', component: PaymentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'order',  component: OrderComponent},
  { path: 'order/payment',  component: PaymentComponent},
  { path: 'cart', component: CartComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  declarations: [FooterComponent]
})
export class AppRoutingModule { }
