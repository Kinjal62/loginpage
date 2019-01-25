import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AddpostComponent } from './addpost/addpost.component';
import { PersonaldetailComponent } from './personaldetail/personaldetail.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MywallComponent } from './mywall/mywall.component';
import { ChatComponent } from './chat/chat.component';
import { ConnectionComponent } from './connection/connection.component';
import { FeedsComponent } from './feeds/feeds.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    AddpostComponent,
    PersonaldetailComponent,
    HeaderComponent,
    MywallComponent,
    ChatComponent,
    ConnectionComponent,
    FeedsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
