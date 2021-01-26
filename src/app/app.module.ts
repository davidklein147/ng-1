import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from "@angular/router"

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GritComponent } from './components/grit/grit.component';
import { DaysComponent } from './components/days/days.component';
import { TableComponent } from './components/table/table.component';
import { TablesDataComponent } from './components/tables-data/tables-data.component';
import { BasketComponent } from './components/basket/basket.component';
import { HerdersDataComponent } from './components/herders-data/herders-data.component';
import { HomeComponent } from './components/home/home.component';
import { TicketsComponent } from './components/tickets/tickets.component';

import { DisplayDataPipe } from './pipes/display-data.pipe';

const routes: Routes =[
  {path:'', component: HomeComponent},
  {path:'tickets', component: TicketsComponent},
  {path:'cart', component: BasketComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GritComponent,
    DaysComponent,
    TableComponent,
    TablesDataComponent,
    BasketComponent,
    HerdersDataComponent,
    DisplayDataPipe,
    HomeComponent,
    TicketsComponent
  ],
  imports: [
   BrowserModule,
   FormsModule,
   RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
