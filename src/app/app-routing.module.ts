import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { SignComponent } from './sign/sign.component'
import { LoginComponent } from './login/login.component'
import { TicketComponent } from './ticket/ticket.component'
import { ShopComponent } from './shop/shop.component'


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "sign", component: SignComponent },
  { path: "login", component: LoginComponent },
  { path: "tickets", component: TicketComponent },
  { path: "shop", component: ShopComponent },
  { path: "shop", component: ShopComponent },
  { path: "**", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
