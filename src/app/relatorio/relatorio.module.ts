import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatorioRoutingModule } from './relatorio-routing.module';
import { RelatorioHomeComponent } from './relatorio-home/relatorio-home.component';



@NgModule({
  declarations: [RelatorioHomeComponent],
  imports: [
    CommonModule,
    RelatorioRoutingModule,
    ReactiveFormsModule

  ]
})
export class RelatorioModule { }
