import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Spprod1SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Spprod1SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class Spprod1HomeModule {}
