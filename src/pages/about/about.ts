import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SMS } from "@ionic-native/sms";
import { CallNumber } from "@ionic-native/call-number";
import { Geolocation } from "@ionic-native/geolocation";
import { Storage } from "@ionic/storage";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  lat:any;
  lng:any;
  constructor(private sms: SMS, private callSvc: CallNumber, public geo: Geolocation, private storage: Storage) {

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
    this.SMS1();
    this.SMS2();
    this.SMS3();

    
      
    
   
   
    }


    SMS1(){
      this.storage.get('contact1').then((contacto1) => {
      var urlinicial = "AIUUUUDAAA TOY ACA https://www.google.com/maps/search/?api=1&query=";
     var urlfinal = urlinicial.concat(this.lat, ",", this.lng);
      var options: {
    
      replaceLineBreaks: true,
        android: {
        
        }
        
        }
        this.sms.send(contacto1, urlfinal, options).then(() => {console.log('sms worked');}).catch((err)=>{
        alert(JSON.stringify(err))
        });
      })
    }
    SMS2(){
      this.storage.get('contact2').then((contacto2) => {
      var urlinicial = "AIUUUUDAAA TOY ACA https://www.google.com/maps/search/?api=1&query=";
    var urlfinal = urlinicial.concat(this.lat, ",", this.lng);
    var options: {
    
    replaceLineBreaks: true,
    android: {
    
    }
    
    }
    this.sms.send(contacto2, urlfinal, options).then(() => {console.log('sms worked');}).catch((err)=>{
    alert(JSON.stringify(err))
    });
  })
    }
    SMS3(){
      this.storage.get('contact3').then((contacto3) => {
      var urlinicial = "AIUUUUDAAA TOY ACA https://www.google.com/maps/search/?api=1&query=";
    var urlfinal = urlinicial.concat(this.lat, ",", this.lng);
    var options: {
    
    replaceLineBreaks: true,
    android: {
    
    }
    
    }
    this.sms.send(contacto3, urlfinal, options).then(() => {console.log('sms worked');}).catch((err)=>{
    alert(JSON.stringify(err))
    });
  })
    }    
 

}
