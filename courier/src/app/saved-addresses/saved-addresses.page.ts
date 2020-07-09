import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-addresses',
  templateUrl: './saved-addresses.page.html',
  styleUrls: ['./saved-addresses.page.scss'],
})
export class SavedAddressesPage implements OnInit {
tab: string = "home";
fabAction = false;	
fabAction2 = false;	
fabAction3 = false;	

  constructor() { }

  ngOnInit() {
  }
 toggleFab(){
        this.fabAction = !this.fabAction;
   } 
 toggleFab2(){
        this.fabAction2 = !this.fabAction2;
   } 
 toggleFab3(){
        this.fabAction3 = !this.fabAction3;
   }
}
