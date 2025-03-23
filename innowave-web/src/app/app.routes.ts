import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductPageAllComponent } from './product-page-all/product-page-all.component';
import { ProductPageWLHPComponent } from './product-page-wlhp/product-page-wlhp.component';
import { ProductPageWLEPComponent } from './product-page-wlep/product-page-wlep.component';
import { ProductPageWHPComponent } from './product-page-whp/product-page-whp.component';
import { ProductPageWEPComponent } from './product-page-wep/product-page-wep.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'products', component: ProductPageAllComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'forget-password', component: ForgetPasswordComponent},
  { path: 'login', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'product_page_WLHP', component: ProductPageWLHPComponent },
  { path: 'product_page_WLEP', component: ProductPageWLEPComponent },
  { path: 'product_page_WHP', component: ProductPageWHPComponent },
  { path: 'product_page_WEP', component: ProductPageWEPComponent },
  { path: 'product-detail/:id',  component: ProductDetailComponent},
];
