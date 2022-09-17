import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { VanessaHeaderComponent } from './vanessa-header/vanessa-header.component';
import { VanessaTimerComponent } from './vanessa-timer/vanessa-timer.component';
import { VanessaSimpleInterestsComponent } from './vanessa-simple-interests/vanessa-simple-interests.component';
import { VanessaCompoundInterestsComponent } from './vanessa-compound-interests/vanessa-compound-interests.component';
import { VanessaRandomNumbersComponent } from './vanessa-random-numbers/vanessa-random-numbers.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, VanessaTimerComponent, VanessaHeaderComponent, VanessaSimpleInterestsComponent, VanessaCompoundInterestsComponent, VanessaRandomNumbersComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
