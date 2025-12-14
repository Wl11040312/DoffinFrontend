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
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InplaceModule } from 'primeng/inplace';
import { AutoFocusModule } from 'primeng/autofocus';


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
  AvatarModule,
  MenuModule,
  MenubarModule,
  BadgeModule,
  ToastModule,
  ToolbarModule,
  InputGroupModule,
  InputGroupAddonModule,
  InplaceModule,
  AutoFocusModule
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
