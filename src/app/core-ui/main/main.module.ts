import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material';

import { MaterialModule } from '../material/material.module';
import { DirectiveModule } from '../directive/directive.module';

import { MainRouterComponent } from './main.router';
import { StatusComponent } from './status/status.component';
import { ConsoleModalComponent } from './status/modal/help-modal/console-modal.component';
import { BlockSyncBarComponent } from './block-sync-bar/block-sync-bar.component';

import { ReleaseNotificationComponent } from './release-notification/release-notification.component';
import { ClientVersionService } from '../../core/http/client-version.service';

import { CartComponent } from './cart/cart.component';
import { TimeoffsetComponent } from './status/timeoffset/timeoffset.component';
import { MultiwalletModule } from 'app/multiwallet/multiwallet.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    MatIconModule,
    DirectiveModule,
    MultiwalletModule
  ],
  exports: [
    MainRouterComponent
  ],
  declarations: [
    MainRouterComponent,
    StatusComponent,
    BlockSyncBarComponent,
    ConsoleModalComponent,
    ReleaseNotificationComponent,
    CartComponent,
    TimeoffsetComponent
  ],
  entryComponents: [
    ConsoleModalComponent,
    ReleaseNotificationComponent
  ],
  providers: [
    ClientVersionService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainViewModule { }