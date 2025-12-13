import { Component } from "@angular/core";
import { AppModules } from "../../app.modules";

@Component({
  standalone: true,
  selector: 'pages-others-login',
  imports: [AppModules],
  template:
  `
<div class="flex flex-column h-screen" style="max-height:95vh;">

  <div class="flex justify-content-center align-items-center" style="height: 97%;">
    <p-card class="surface-card p-4 shadow-2 border-round w-full sm:w-30rem">
      <!-- Card content here -->
      <div class="flex align-items-center justify-content-center mb-3">
        <img src="favicon.svg" alt="logo" class="block" style="max-width: 30%; max-height: 80px;" />
        <h2>Doffin</h2>
      </div>

      <div class="flex flex-column gap-3">
        <p-iconfield>
          <p-inputicon class="pi pi-user"/>
          <input pInputText fluid type="text" placeholder="Username" [(ngModel)]="username"/>
          <p-inputicon *ngIf="username" class="pi pi-times" style="cursor:pointer" (click)="username='';"/>
        </p-iconfield>

        <p-iconfield>
          <p-inputicon class="pi pi-lock"/>
          <p-password fluid feedback="false" toggleMask="true" showClear="true" placeholder="Password" [(ngModel)]="password"/>
        </p-iconfield>

        <button pButton label="Login" icon="pi pi-sign-in" class="w-full mt-2"></button>
      </div>

    </p-card>
  </div>

  <div class="flex justify-content-center align-items-center" style="height: 3%;">
    <p class="text-center p-2">
      If encounter any problem, please contact administrator.
    </p>
  </div>

</div>

  `
})

export class Login {
  username: string = '';
  password: string = '';
}
