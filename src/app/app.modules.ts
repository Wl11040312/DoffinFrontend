// Common Ng Module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Prime Ng Module
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { DrawerModule } from 'primeng/drawer';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';


const CommonNgModule = [
  RouterModule,
  FormsModule,
  CommonModule
  
];

const PrimeNgModule = [
  ButtonModule,
  IconFieldModule,
  InputIconModule,
  PasswordModule,
  CardModule,
  InputTextModule,
  AnimateOnScrollModule,
  DrawerModule,
  RippleModule,
  AvatarModule
];

@NgModule({
  imports: [
    CommonNgModule,
    PrimeNgModule
  ],
  exports: [
    CommonNgModule,
    PrimeNgModule
  ]
})

export class AppModules { }
