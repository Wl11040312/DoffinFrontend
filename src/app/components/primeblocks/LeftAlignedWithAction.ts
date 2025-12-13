import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'left-aligned-with-action',
  standalone: true,
  imports: [CommonModule, ButtonModule, ChipModule],
  template: `
        <div class="bg-surface-0 dark:bg-surface-950 px-8 md:px-20 py-12 md:py-20 lg:px-80">
            <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-2 pb-4">
                    <div class="font-semibold text-xl text-surface-900 dark:text-surface-0 leading-tight">Movie Information</div>
                    <div class="text-surface-500 dark:text-surface-300 text-base leading-tight">Morbi tristique blandit turpis. In viverra ligula id nulla hendrerit rutrum.</div>
                </div>

                <div class="border-t border-surface-200 dark:border-surface-700"></div>

                <div class="flex flex-col gap-4">
                    <div class="flex flex-col md:flex-row gap-4">
                        <div class="flex items-center gap-4 flex-1">
                            <div class="w-[140px] text-surface-900 dark:text-surface-0 font-medium text-base leading-tight">Title</div>
                            <div class="flex-1 text-surface-900 dark:text-surface-0 text-base leading-tight">Heat</div>
                        </div>
                        <div class="flex justify-end">
                            <button pButton [rounded]="true" [outlined]="true" severity="secondary" class="shrink-0">
                                <i pButtonIcon class="pi pi-pen-to-square"></i>
                            </button>
                        </div>
                    </div>

                    <div class="border-t border-surface-200 dark:border-surface-700"></div>

                    <div class="flex flex-col md:flex-row gap-4">
                        <div class="flex items-center gap-4 flex-1">
                            <div class="w-[140px] text-surface-900 dark:text-surface-0 font-medium text-base leading-tight">Genre</div>
                            <div class="flex-1 flex flex-wrap gap-2">
                                <p-chip label="Crime" severity="secondary"></p-chip>
                                <p-chip label="Drama" severity="secondary"></p-chip>
                                <p-chip label="Thriller" severity="secondary"></p-chip>
                            </div>
                        </div>
                        <div class="flex justify-end">
                            <button pButton [rounded]="true" [outlined]="true" severity="secondary" class="shrink-0">
                                <i pButtonIcon class="pi pi-pen-to-square"></i>
                            </button>
                        </div>
                    </div>

                    <div class="border-t border-surface-200 dark:border-surface-700"></div>

                    <div class="flex flex-col md:flex-row gap-4">
                        <div class="flex items-center gap-4 flex-1">
                            <div class="w-[140px] text-surface-900 dark:text-surface-0 font-medium text-base leading-tight">Director</div>
                            <div class="flex-1 text-surface-900 dark:text-surface-0 text-base leading-tight">Michael Mann</div>
                        </div>
                        <div class="flex justify-end">
                            <button pButton [rounded]="true" [outlined]="true" severity="secondary" class="shrink-0">
                                <i pButtonIcon class="pi pi-pen-to-square"></i>
                            </button>
                        </div>
                    </div>

                    <div class="border-t border-surface-200 dark:border-surface-700"></div>

                    <div class="flex flex-col md:flex-row gap-4">
                        <div class="flex items-center gap-4 flex-1">
                            <div class="w-[140px] text-surface-900 dark:text-surface-0 font-medium text-base leading-tight">Writer</div>
                            <div class="flex-1 text-surface-900 dark:text-surface-0 text-base leading-tight">Michael Mann</div>
                        </div>
                        <div class="flex justify-end">
                            <button pButton [rounded]="true" [outlined]="true" severity="secondary" class="shrink-0">
                                <i pButtonIcon class="pi pi-pen-to-square"></i>
                            </button>
                        </div>
                    </div>

                    <div class="border-t border-surface-200 dark:border-surface-700"></div>

                    <div class="flex flex-col md:flex-row gap-4">
                        <div class="flex items-start gap-4 flex-1">
                            <div class="w-[140px] text-surface-900 dark:text-surface-0 font-medium text-base leading-tight">Plot</div>
                            <div class="flex-1 text-surface-900 dark:text-surface-0 text-base leading-normal">
                                A group of professional bank robbers start to feel the heat from police when they unknowingly leave a clue at their latest heist.
                            </div>
                        </div>
                        <div class="flex justify-end">
                            <button pButton [rounded]="true" [outlined]="true" severity="secondary" class="shrink-0">
                                <i pButtonIcon class="pi pi-pen-to-square"></i>
                            </button>
                        </div>
                    </div>

                    <div class="border-t border-surface-200 dark:border-surface-700"></div>
                </div>
            </div>
        </div>
    `
})
export class LeftAlignedWithAction { }
