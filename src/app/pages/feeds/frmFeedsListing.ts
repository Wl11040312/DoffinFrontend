import { Component, OnInit } from "@angular/core";
import { AppModules } from "../../app.modules";

@Component
  ({
    selector: 'pages-feeds-feedsListing',
    standalone: true,
    imports: [AppModules],
    templateUrl: './frmFeedsListing.html',
    styles: ``
  })

export class frmFeedsListing implements OnInit {
  constructor() { }

  ngOnInit() {

  }
}
