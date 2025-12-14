import { Routes } from '@angular/router';
import { Home } from './pages/others/Home';
import { Login } from './pages/others/Login';
import { TestPrimeBlockComponent } from './components/primeblocks/TestPrimeBlock';
import { Test } from './components/Test';
import { MainLayout } from './components/layouts/MainLayout';
import { FeedsComponents } from './pages/feeds/feeds.components';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'test', component: Test },
  { path: 'test/test-prime-block/:blockName', component: TestPrimeBlockComponent },
  {
    path: 'app', component: MainLayout, children: [
      { path: 'feeds', component: FeedsComponents, loadChildren: () => import('./pages/feeds/feeds.routes').then(m => m.FeedsChildRoutes) },
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
