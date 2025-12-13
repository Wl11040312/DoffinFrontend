import { Routes } from '@angular/router';
import { Home } from './pages/others/Home';
import { Login } from './pages/others/Login';
import { TestPrimeBlockComponent } from './components/primeblocks/TestPrimeBlock';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'test/test-prime-block/:blockName', component: TestPrimeBlockComponent },
  { path: '**', redirectTo:'' }
];
