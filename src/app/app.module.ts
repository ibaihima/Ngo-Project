import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { EventManagerComponent } from './event-manager/event-manager.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { UserViewComponent } from './user-view/user-view.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { AddEventComponent } from './add-event/add-event.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { UserViewDetailsComponent } from './user-view-details/user-view-details.component';
import { RegisterComponent } from './register/register.component';
import {MatStep, MatStepperModule} from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { InterceptorService } from './interceptor.service';
import { MatDialog } from '@angular/material/dialog';
import { SignupPageComponent } from './signup-page/signup-page.component';







@NgModule({
  declarations: [
    AppComponent,
    EventManagerComponent,
    LoginPageComponent,
    UserViewComponent,
    EventEditComponent,
    AddEventComponent,
    UserViewDetailsComponent,
    RegisterComponent,
    SignupPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule,
    MatStepperModule,
    MatInputModule,
    CommonModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
