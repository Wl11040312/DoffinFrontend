import { Routes } from '@angular/router';

import { frmFeedsListing } from './frmFeedsListing';

export const FeedsChildRoutes: Routes = [
  { path: 'feeds-listing', data: {breadcrumb:'Feeds'}, component: frmFeedsListing },
];
