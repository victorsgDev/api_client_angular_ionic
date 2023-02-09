import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablePageRoutingModule } from './table-routing.module';

import { TablePage } from './table.page';
import {TableDataComponent} from "../components/table-data/table-data.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TablePageRoutingModule,
    HttpClientModule
  ],
  declarations: [TablePage, TableDataComponent]
})
export class TablePageModule {}
