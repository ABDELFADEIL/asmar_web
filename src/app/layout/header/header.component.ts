import {Component, OnInit} from '@angular/core';
import { faCoffee, faBagShopping, faBars, faXmark, faSearch, faHouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  faBagShopping = faBagShopping;
  faHouse = faHouse;
  faBars = faBars;
  faXmark = faXmark;
  activeMenu: boolean = false;
  faSearch = faSearch;

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
    const main = document.querySelector('main') as HTMLElement;
    const nav = document.querySelector('.nav-bar') as HTMLElement;
    if (this.activeMenu){
      main.style.marginTop = '280px';
      nav.style.padding = '10px';
      nav.style.height = 'auto';
    }else{
      main.style.marginTop = '65px';
      nav.style.padding = '0';
      nav.style.height = '0';
    }
  }

  ngOnInit(): void {
    const main = document.querySelector('main') as HTMLElement;
    const nav = document.querySelector('.nav-bar') as HTMLElement;
    if(window.innerWidth <= 768){
      main.style.marginTop = '65px';
      nav.style.padding = '0';
      nav.style.height = '0';
    }
    window.addEventListener('resize', () => {

      if(window.innerWidth <= 768){
        this.activeMenu = false;
        if (!this.activeMenu){
          main.style.marginTop = '65px';
          nav.style.padding = '0';
          nav.style.height = '0';
        }else {
          nav.style.padding = '10px';
          nav.style.height = 'auto';
        }
      }else {
        main.style.marginTop = '115px';
        nav.style.padding = '10px';
        nav.style.height = 'auto';
      }
    });
  }
}
