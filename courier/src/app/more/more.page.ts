import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { APP_CONFIG, AppConfig } from '../app.config';

@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
})
export class MorePage implements OnInit {

  constructor(@Inject(APP_CONFIG) public config: AppConfig, private route: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  view_profile() {
    this.route.navigate(['./my-profile']);
  }
  saved_addresses() {
    this.route.navigate(['./saved-addresses']);
  }
  contact_us() {
    this.route.navigate(['./contact-us']);
  }
  change_language() {
    this.route.navigate(['./change-language']);
  }
  terms_conditions() {
    this.route.navigate(['./terms-conditions']);
  }
  logout() {
    this.navCtrl.navigateRoot(['./sign-in']);
  }
  buyAppAction() {
    window.open("https://bit.ly/cc_CourierOne", '_system', 'location=no');
  }
}
