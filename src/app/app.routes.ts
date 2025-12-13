import { Routes } from '@angular/router';
import { Home } from './pages/others/Home';
import { Login } from './pages/others/Login';
import { TestPrimeBlockComponent } from './components/primeblocks/TestPrimeBlock';
import { Test } from './components/Test';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'test', component: Test },
  { path: 'test/test-prime-block/:blockName', component: TestPrimeBlockComponent },
  { path: '**', redirectTo:'' }
];
