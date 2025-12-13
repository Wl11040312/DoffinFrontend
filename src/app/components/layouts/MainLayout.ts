import { Component, ViewChild } from "@angular/core";
import { AppModules } from "../../app.modules";
import { Drawer } from "primeng/drawer";

@Component({
  selector: 'main-layout',
  standalone: true,
  imports: [AppModules],
  templateUrl: './MainLayout.html',
  styleUrl: './MainLayout.css'
})

export class MainLayout {
  @ViewChild('drawerRef') drawerRef!: Drawer;

  visible: boolean = false;

  closeCallback(e: any): void {
    this.drawerRef.close(e);
  }
}
