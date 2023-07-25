import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { AdminMenuComponent } from './shared/components/admin-menu/admin-menu.component';
import { CashierMenuComponent } from './shared/components/cashier-menu/cashier-menu.component';
import { SaleAndCashComponent } from './shared/components/sale-and-cash/sale-and-cash.component';
import { PaymentComponent } from './shared/components/payment/payment.component';
import { OperatorMenuComponent } from './shared/components/operator-menu/operator-menu.component';
import { ReprintReceiptComponent } from './shared/components/operator-menu/reprint-receipt/reprint-receipt.component';
import { BatchUplaodComponent } from './shared/components/operator-menu/batch-uplaod/batch-uplaod.component';
import { ParameterUpdateComponent } from './shared/components/operator-menu/parameter-update/parameter-update.component';
import { SaleComponent } from './shared/components/operator-menu/manual-card-entry/sale/sale.component';
import { RefundComponent } from './shared/components/operator-menu/manual-card-entry/refund/refund.component';
import { PreAuthComponent } from './shared/components/operator-menu/manual-card-entry/pre-auth/pre-auth.component';
import { PreAuthCompletionComponent } from './shared/components/operator-menu/manual-card-entry/pre-auth-completion/pre-auth-completion.component';
import { VoiceOverrideComponent } from './shared/components/operator-menu/manual-card-entry/voice-override/voice-override.component';
import { ReportsMenuComponent } from './shared/components/reports-menu/reports-menu.component';
import { ParametersComponent } from './shared/components/reports-menu/parameters/parameters.component';
import { ManualCardEntryComponent } from './shared/components/operator-menu/manual-card-entry/manual-card-entry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminMenuComponent,
    CashierMenuComponent,
    SaleAndCashComponent,
    PaymentComponent,
    OperatorMenuComponent,
    ManualCardEntryComponent,
    ReprintReceiptComponent,
    BatchUplaodComponent,
    ParameterUpdateComponent,
    SaleComponent,
    RefundComponent,
    PreAuthComponent,
    PreAuthCompletionComponent,
    VoiceOverrideComponent,
    ReportsMenuComponent,
    ParametersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
