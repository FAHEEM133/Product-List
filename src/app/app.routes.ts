import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SingleDisctrictComponent } from './pages/single-disctrict/single-disctrict.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ToDoListComponent } from './pages/to-do-list/to-do-list.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent  },
    { path: 'login', component: LoginComponent },
    { path: 'singledistrict', component: SingleDisctrictComponent },
    { path: 'contact', component: ContactComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'toDoList', component: ToDoListComponent }
  ];
