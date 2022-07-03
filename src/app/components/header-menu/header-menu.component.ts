import { Component, OnInit } from '@angular/core';

interface HeaderItems{
  name:string;
  icon:string;
  route:string;
};

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

  sections: HeaderItems[] = [
    {name: '', route: '/home', icon:'home'},
    {name: 'Characters', route: '/characters', icon:''},
    {name: 'Students', route: '/students', icon:''},
    {name: 'Teachers', route: '/teachers', icon:''}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
