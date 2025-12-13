import { Component } from "@angular/core";
import { AppModules } from "../app.modules";

@Component({
  selector: 'test',
  standalone: true,
  imports: [AppModules],
  templateUrl: './Test.html',
  styleUrl: './Test.css'
})

export class Test {

}
