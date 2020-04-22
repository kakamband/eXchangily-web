import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { ComponentsModule } from '../../components/components.module';

import { NoAuthGuard } from '../../guards/no-auth/no-auth.guard';
import { AuthGuard } from '../../guards/auth/auth.guard';
import { ReferralModule } from '../account/referrals/referrals.module';

import { AdminComponent } from './admin.component';
import { AddcoinComponent } from './coin/addcoin.component';
import { MerchantComponent } from './merchant/merchant.component';
import { OrderEditComponent } from './order/order-edit.component';
import { CampaignOrdersComponent } from './campaign-orders/campaign-orders.component';
import { OrderManagementComponent } from './order/order-mngmt.component';
import { OtcListingComponent } from './otc/otc-listing/otc-listing.component';
import { KycComponent } from './kyc/kyc.component';
import { KycsComponent } from './kyc/kycs.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CampaignOrderService } from '../../service/campaignorder/campaignorder.service';
import { MerchantService } from '../../service/../../../services/merchant.service';
import { OrderItemComponent } from './order/order-item.component';
import { TokenlockService } from '../../service/tokenlock/tokenlock.service';
import { TokenlockComponent } from './tokenlock/tokenlock.component';
import {MatButtonModule} from '@angular/material/button';
import { OtcService } from '../../../../services/otc.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ComponentsModule,
    FormsModule,
    FlexLayoutModule,
    AdminRoutingModule,
    ReferralModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [AuthGuard, NoAuthGuard, TokenlockService, CampaignOrderService, MerchantService, OtcService],
  declarations: [
    AdminComponent,
    AddcoinComponent,
    OtcListingComponent,
    OrderEditComponent,
    CampaignOrdersComponent,
    OrderManagementComponent,
    KycComponent,
    MerchantComponent,
    KycsComponent,
    OrderItemComponent,
    TokenlockComponent
  ]
})
export class AdminModule {}
