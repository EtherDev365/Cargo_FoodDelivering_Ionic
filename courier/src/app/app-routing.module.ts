import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./verification/verification.module').then(m => m.VerificationPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'arrange-delivery',
    loadChildren: () => import('./arrange-delivery/arrange-delivery.module').then(m => m.ArrangeDeliveryPageModule)
  },
  {
    path: 'height-weight-lenght',
    loadChildren: () => import('./height-weight-lenght/height-weight-lenght.module').then(m => m.HeightWeightLenghtPageModule)
  },
  {
    path: 'deliverymode',
    loadChildren: () => import('./deliverymode/deliverymode.module').then(m => m.DeliverymodePageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then(m => m.PaymentPageModule)
  },
  {
    path: 'pickup-assigned',
    loadChildren: () => import('./pickup-assigned/pickup-assigned.module').then(m => m.PickupAssignedPageModule)
  },
  {
    path: 'search-restaurant',
    loadChildren: () => import('./search-restaurant/search-restaurant.module').then(m => m.SearchRestaurantPageModule)
  },
  {
    path: 'search-grocery-stores',
    loadChildren: () => import('./search-grocery-stores/search-grocery-stores.module').then(m => m.SearchGroceryStoresPageModule)
  },
  {
    path: 'my-deliveries',
    loadChildren: () => import('./my-deliveries/my-deliveries.module').then(m => m.MyDeliveriesPageModule)
  },
  {
    path: 'track-delivery',
    loadChildren: () => import('./track-delivery/track-delivery.module').then(m => m.TrackDeliveryPageModule)
  },
  {
    path: 'more',
    loadChildren: () => import('./more/more.module').then(m => m.MorePageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./my-profile/my-profile.module').then(m => m.MyProfilePageModule)
  },
  {
    path: 'saved-addresses',
    loadChildren: () => import('./saved-addresses/saved-addresses.module').then(m => m.SavedAddressesPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsPageModule)
  },
  {
    path: 'terms-conditions',
    loadChildren: () => import('./terms-conditions/terms-conditions.module').then(m => m.TermsConditionsPageModule)
  },
  {
    path: 'change-language',
    loadChildren: () => import('./change-language/change-language.module').then(m => m.ChangeLanguagePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
