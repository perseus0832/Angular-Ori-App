import { DetailMediaPage } from './../pages/detail-media/detail-media';
import { HttpClientModule } from '@angular/common/http';
import { SignUpPage } from './../pages/sign-up/sign-up';
import { LogInPage } from './../pages/log-in/log-in';
import { UploadMediaPage } from './../pages/upload-media/upload-media';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserProvider } from '../providers/user/user';
import { MediaProvider } from '../providers/media/media';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    UploadMediaPage,
    LogInPage,
    SignUpPage,
    DetailMediaPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    UploadMediaPage,
    LogInPage,
    SignUpPage,
    DetailMediaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    MediaProvider,
    Camera
  ]
})
export class AppModule {}
