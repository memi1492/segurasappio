import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SMS } from "@ionic-native/sms";
import { CallNumber } from "@ionic-native/call-number";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(private sms: SMS, private callSvc: CallNumber) {

  }


  call(){
    this.callSvc.callNumber('31663396', true).then(()=>{
      console.log('worked');
    }).catch((err)=>{
      alert(JSON.stringify(err))
    })
  }



  senSMS(){


    var options: {
    
    replaceLineBreaks: true,
    android: {
    
    }
    
    }
    this.sms.send('31663396', "AIUUUUDAAA TOY ACA https://www.google.com/maps/search/?api=1&query=36.26577,-92.54324", options).then(() => {console.log('sms worked');}).catch((err)=>{
    alert(JSON.stringify(err))
    });
    }
    
 

}
