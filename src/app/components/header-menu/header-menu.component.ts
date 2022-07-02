import { Component, OnInit } from '@angular/core';

interface HeaderItems{
  name:string;
  route:string;
};

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

  sections: HeaderItems[] = [
    {name: 'Characters', route: ''},
    {name: 'Students', route: ''},
    {name: 'Teachers', route: ''}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
