import { Routes } from '@angular/router';
import { frmFeedsListing } from './frmFeedsListing';
import { frmFeedsDetail } from './frmFeedsDetail';

export const FeedsChildRoutes: Routes = [
  { path: '', component: frmFeedsListing },
  { path: ':feedsId', data: { breadcrumb: ':feedsId' }, component: frmFeedsDetail },  
];
