import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Spprod1SharedModule } from 'app/shared/shared.module';
import { Spprod1CoreModule } from 'app/core/core.module';
import { Spprod1AppRoutingModule } from './app-routing.module';
import { Spprod1HomeModule } from './home/home.module';
import { Spprod1EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Spprod1SharedModule,
    Spprod1CoreModule,
    Spprod1HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Spprod1EntityModule,
    Spprod1AppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class Spprod1AppModule {}
