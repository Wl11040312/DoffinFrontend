import { Component, OnInit, ViewChild } from "@angular/core";
import { AppModules } from "../../app.modules";
import { Drawer } from "primeng/drawer";
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'main-layout',
  standalone: true,
  imports: [AppModules],
  providers: [MessageService],
  templateUrl: './MainLayout.html',
  styleUrl: './MainLayout.css'
})

export class MainLayout implements OnInit {
  constructor(private messageService: MessageService) { }

  items: MenuItem[] | undefined;
  menubarButton: any = [];

  @ViewChild('drawerRef') drawerRef!: Drawer;

  visibleDrawer: boolean = false;
  visibleSearch: boolean = false;
  txtSearch: string = '';

  closeCallback(e: any): void {
    this.drawerRef.close(e);
  }

  pMenuCss = {
    root: {
      borderColor: 'none',      
    },
    item: {
      focusBackground: 'none'
    }
  };

  ngOnInit() {
    this.items = [
      { label: 'Dashboard', icon: 'pi pi-th-large', iconColor: 'text-blue-500', routerLink: '/' },
      { label: 'Search', icon: 'pi pi-search', iconColor: 'text-indigo-500' },
      { label: 'Groups', icon: 'pi pi-users', iconColor: 'text-green-500' },
      { label: 'People', icon: 'pi pi-user', iconColor: 'text-purple-500' },
      { label: 'Mail', icon: 'pi pi-envelope', iconColor: 'text-red-500' },
      { label: 'Chat', icon: 'pi pi-comments', iconColor: 'text-teal-500' },
      { label: 'Notifications', icon: 'pi pi-bell', iconColor: 'text-yellow-500' },
      { label: 'Settings', icon: 'pi pi-cog', iconColor: 'text-gray-500' },
      { label: 'Help', icon: 'pi pi-info-circle', iconColor: 'text-pink-500' }
    ];

    this.menubarButton = [
      { icon: 'pi pi-search', command: () => this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' }) },
      { icon: 'pi pi-user', command: () => this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content' }) },
      { icon: 'pi pi-bell', command: () => this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content' }) },
      { icon: 'pi pi-info-circle', command: () => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' }) },
    ];
  }
}
