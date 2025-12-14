import { Component, OnInit } from "@angular/core";
import { AppModules } from "../../app.modules";

@Component
  ({
    selector: 'feeds-component',
    standalone: true,
    imports: [AppModules],
    templateUrl: './feeds.components.html',
    styles: ``
  })

export class FeedsComponents implements OnInit {
  constructor() { }

  ngOnInit() {

  }
}
