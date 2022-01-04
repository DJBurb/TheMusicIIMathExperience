import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController, private nativeAudio: NativeAudio,
    private platform: Platform) {}

  startWork(pagePath:string){
    // if (this.platform.is('cordova')) {
    //   this.nativeAudio.preloadSimple('transitionSound', '../../assets/sounds/Chimes-sound-effect.mp3')
    //   .then(()=>{
    //     this.nativeAudio.play('transitionSound').then(()=>{
    //       this.navCtrl.navigateForward('/' + pagePath);
    //     });

    //   });
    // }
    // else{
    //   this.navCtrl.navigateForward('/' + pagePath);
    // }
    this.navCtrl.navigateForward('/' + pagePath);
  }
}
