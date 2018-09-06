import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
import { InputComponent } from './input/input.component';

var config = {
  apiKey: "AIzaSyCpA9El_No87FN9vaQimD8ee6ePxlHS9v8",
  authDomain: "chat-fc5e5.firebaseapp.com",
  databaseURL: "https://chat-fc5e5.firebaseio.com",
  projectId: "chat-fc5e5",
  storageBucket: "chat-fc5e5.appspot.com",
  messagingSenderId: "208964940867"
};


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessageComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
