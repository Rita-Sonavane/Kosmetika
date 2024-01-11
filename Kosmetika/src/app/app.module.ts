import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SkinCareComponent } from './skin-care/skin-care.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellerService } from './services/seller.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { TryApiService } from './services/try-api.service';
import { SearchComponent } from './partials/search/search.component';
import { FilterPipe } from './shared/filter.pipe';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HairCareComponent } from './hair-care/hair-care.component';
import { HairSearchComponent } from './partials/hair-search/hair-search.component';
import { CartComponent } from './cart/cart.component';
import { OralCareComponent } from './oral-care/oral-care.component';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';
import { HairCareProductDetailComponent } from './hair-care-product-detail/hair-care-product-detail.component';
import { TitleComponent } from './partials/title/title.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './services/user.service';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistService } from './services/wishlist.service';
import { RegisterComponent } from './register/register.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { OrderItemsListComponent } from './partials/order-items-list/order-items-list.component';
import { MapComponent } from './partials/map/map.component';
import { LocationService } from './services/location.service';
import { AuthInterceptor } from './auth/guards/auth.interceptor';
import { PaymentComponent } from './payment/payment.component';
import { PaypalButtonComponent } from './paypal-button/paypal-button.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SkinCareComponent,
    SellerAuthComponent,
    ContactComponent,
    SellerHomeComponent,
    SearchComponent,
    FilterPipe,
    ProductDetailComponent,
    HairCareComponent,
    HairSearchComponent,
    CartComponent,
    OralCareComponent,
    HairCareProductDetailComponent,
    TitleComponent,
    LoginComponent,
    WishlistComponent,
    RegisterComponent,
    CheckoutPageComponent,
    OrderItemsListComponent,
    MapComponent,
    PaymentComponent,
    PaypalButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-bottom-right',
      newestOnTop:false
    })
   
  ],
  providers: [    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi: true },
                  SellerService,TryApiService,ProductService,CartService,UserService,WishlistService,LocationService,

    // {provide:HTTP_INTERCEPTORS, useClass:LoadingInterceptor, multi: true }  
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
