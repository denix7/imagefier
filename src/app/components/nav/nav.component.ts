import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  tmp;
  current;

  constructor() { }

  ngOnInit() {

    const themeMap = {
      dark: "light",
      light: "dark",
    };
    
    const theme = localStorage.getItem('theme')
      || (this.tmp = Object.keys(themeMap)[0],
          localStorage.setItem('theme', this.tmp),
          this.tmp);
    const bodyClass = document.body.classList;
    bodyClass.add(theme);
    
    
    function toggleTheme() {
      this.current = localStorage.getItem('theme');
      const next = themeMap[this.current];
    
      bodyClass.replace(this.current, next);
      localStorage.setItem('theme', next);
    }
    document.getElementById('themeButton').onclick = toggleTheme;

    console.log(theme);
  }

  getTheme()
  {
    const current = localStorage.getItem('theme');

    if(current==='dark')
      return true;
    
      return false;
  }

}
