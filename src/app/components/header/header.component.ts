import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  musicBudzLogoURL: string = "/assets/images/musicbudz_logo.png"
  magnifyingGlassIconURL: string = "/assets/images/icons/magnifier_icon_48px.png";

  constructor() { }

  ngOnInit(): void {
  }

}
