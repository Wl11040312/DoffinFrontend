import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeTiers } from './3Tiers';
import { ThreeTiersAlternate } from './3Tiers-alternate';
import { CenteredThreeByThreeGrid } from './Centered3x3Grid';
import { DarkAndFullWidth } from './DarkAndFullWidth';
import { Glass } from './Glass';
import { IconsAndFootnotes } from './IconsAndFootnotes';
import { LeftAlignedWithAction } from './LeftAlignedWithAction';
import { RightAlignedImage } from './RightAlignedImage';
import { SimpleCentered } from './SimpleCentered';
import { SimpleInCard } from './SimpleInCard';
import { TitleWithSubtitle } from './TitleWithSubtitle';
import { WithAvatarMetaAndActions } from './WithAvatarMetaAndActions';
import { WithBreadcrumbMetaAndActions } from './WithBreadcrumbMetaAndActions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'test-primeblock-component',
  standalone: true,
  imports: [CommonModule],
  template:
  `
    <ng-container #container></ng-container>
    <p *ngIf="missingComponent" style="color: red; font-weight: bold; margin-top: 20px;">
      Component "{{missingComponent}}" not found.
    </p>
  `
})
export class TestPrimeBlockComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;

  missingComponent: string | null = null;

  private MapComponentBlock: { [key: string]: any } = {
    'ThreeTiers': ThreeTiers,
    'ThreeTiersAlternate': ThreeTiersAlternate,
    'CenteredThreeByThreeGrid': CenteredThreeByThreeGrid,
    'DarkAndFullWidth': DarkAndFullWidth,
    'Glass': Glass,
    'IconsAndFootnotes': IconsAndFootnotes,
    'LeftAlignedWithAction': LeftAlignedWithAction,
    'RightAlignedImage': RightAlignedImage,
    'SimpleCentered': SimpleCentered,
    'SimpleInCard': SimpleInCard,
    'TitleWithSubtitle': TitleWithSubtitle,
    'WithAvatarMetaAndActions': WithAvatarMetaAndActions,
    'WithBreadcrumbMetaAndActions': WithBreadcrumbMetaAndActions
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.missingComponent = null;
    this.container.clear();

    this.route.paramMap.subscribe(params => {
      const blockName = params.get('blockName')!;
      const component = this.MapComponentBlock[blockName];

      if (component) {        
        this.container.createComponent(component);
      }
      else {
        this.missingComponent = blockName;
      }
    })
  }

}
