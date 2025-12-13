import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'dark-and-full-width',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
        <div class="pb-20 bg-surface-0 dark:bg-surface-950">
            <div class="bg-surface-900 text-surface-100 py-4 px-6 lg:px-20 flex justify-between items-center flex-wrap">
                <div class="font-bold">🔥 Hot Deals!</div>
                <div class="inline-flex gap-1 items-center">
                    <span class="hidden lg:flex leading-normal">Libero voluptatum atque exercitationem praesentium provident odit.</span>
                    <a class="text-surface-0 underline font-bold" href="#">Learn More</a>
                </div>
                <button pButton [text]="true" [rounded]="true" severity="secondary" class="text-surface-0! hover:bg-surface-500/20!">
                    <i pButtonIcon class="pi pi-times"></i>
                </button>
            </div>
        </div>
    `
})
export class DarkAndFullWidth { }
