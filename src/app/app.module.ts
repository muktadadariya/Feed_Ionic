import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PostPage } from '../pages/post/post';
import { Data } from '../providers/data';
import { AngularFireModule } from 'angularfire2';
import { ConnectionComponent } from '../components/connection/connection';

  const config = {
    apiKey: "AIzaSyCfbSS7K-PB2q7PKYHid9te-zigkrmRi0k",
    authDomain: "test-80203.firebaseapp.com",
    databaseURL: "https://test-80203.firebaseio.com",
    storageBucket: "test-80203.appspot.com",
    messagingSenderId: "160467789258"
  };

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PostPage,
    ConnectionComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PostPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Data]
})
export class AppModule {}
