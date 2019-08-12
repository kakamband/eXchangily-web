import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarketHomeComponent } from './components/home/market-home.component';
import { MarketListComponent } from './components/list/market-list.component';
import { TradeComponent } from './components/trade/trade.component';

const routes: Routes = [
  { path: 'market/home', component: MarketHomeComponent },
  { path: 'market/list', component: MarketListComponent },
  { path: 'market/trade/:pair', component: TradeComponent },
  { path: 'market', redirectTo: 'market/home', pathMatch: 'full' },
  { path: '', redirectTo: 'market/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketRoutingModule { }
