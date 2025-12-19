import { Component, OnInit } from '@angular/core';
import { AppModules } from '../../app.modules';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'pages-feeds-feedsDetail',
  standalone: true,
  imports: [AppModules],
  templateUrl: './frmFeedsDetail.html',
})

export class frmFeedsDetail implements OnInit {
  feedsNotFound: boolean = false;

  pMenuCss = {
    root: {
      borderColor: 'none',
    },
    item: {
      focusBackground: 'none',
    }
  };

  moreOptionsMenu: MenuItem[] | undefined;
  constructor(private route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.moreOptionsMenu = [
      {
        label: 'Options', items: [
          { label: 'Refresh', icon: 'pi pi-refresh', command: () => { } },
          { label: 'Share', icon: 'pi pi-share-alt', command: () => { } },
          { label: 'Download', icon: 'pi pi-download', command: () => { } },
        ]
      }
    ];

    this.route.paramMap.subscribe(params => {
      const feedsId = params.get('feedsId')!;

      //TODO: Apply Form Data.

      if (feedsId) {
        const id = parseInt(feedsId, 10);
        if (!isNaN(id) && id > 20) this.feedsNotFound = true;
      }
    });
  }
}
