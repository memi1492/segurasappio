import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SMS } from "@ionic-native/sms";
import { CallNumber } from "@ionic-native/call-number";
import { Geolocation } from "@ionic-native/geolocation";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  lat:any;
  lng:any;
  constructor(private sms: SMS, private callSvc: CallNumber, public geo: Geolocation) {

  }

  ionViewDidLoad(){

    this.geo.getCurrentPosition().then(pos=>{
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;
    }).catch(err=> console.log(err));
  }

  call(){
    this.callSvc.callNumber('31663396', true).then(()=>{
      console.log('worked');
    }).catch((err)=>{
      alert(JSON.stringify(err))
    })
  }



  senSMS(){

    var urlinicial = "AIUUUUDAAA TOY ACA https://www.google.com/maps/search/?api=1&query=";
    var urlfinal = urlinicial.concat(this.lat, ",", this.lng);
    var options: {
    
    replaceLineBreaks: true,
    android: {
    
    }
    
    }
    this.sms.send('31663396', urlfinal, options).then(() => {console.log('sms worked');}).catch((err)=>{
    alert(JSON.stringify(err))
    });
    }
    
 

}
