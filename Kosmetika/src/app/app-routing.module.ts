import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SkinCareComponent } from './skin-care/skin-care.component';
import { ContactComponent } from './contact/contact.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HairCareComponent } from './hair-care/hair-care.component';
import { CartComponent } from './cart/cart.component';
import { OralCareComponent } from './oral-care/oral-care.component';
import { HairCareProductDetailComponent } from './hair-care-product-detail/hair-care-product-detail.component';
import { TitleComponent } from './partials/title/title.component';
import { LoginComponent } from './login/login.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { RegisterComponent } from './register/register.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { PaymentComponent } from './payment/payment.component';




const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'skin-care',component:SkinCareComponent},
  {path:'hair-care',component:HairCareComponent},
  {path:'oral-care',component:OralCareComponent},
  {path:'search/:searchTerm',component:SkinCareComponent},
  {path:'hair-search/:searchTerm',component:HairCareComponent},
  {path:'seller-auth',component:SellerAuthComponent},
  {path:'contact',component:ContactComponent},
  {path:'product-detail/:id',component:ProductDetailComponent},
  {path:'hair-care-product-detail/:id',component:HairCareProductDetailComponent},
  {path:'cart',component:CartComponent},
  {path:'title',component:TitleComponent},
  {path:'seller-home',component:SellerHomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'checkout', component: CheckoutPageComponent, canActivate:[AuthGuard]},
  {path:'payment',component: PaymentComponent, canActivate:[AuthGuard]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
