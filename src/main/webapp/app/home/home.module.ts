import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ServicePfeSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [ServicePfeSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class ServicePfeHomeModule {}
