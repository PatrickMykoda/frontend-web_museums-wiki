import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'museums-front';
  openedNavItem!: HTMLElement;
  someString: string = "Hellooooo!";

  openAccordeon(navItemId: string){
    this.openedNavItem = document.getElementById(navItemId)!;
    if (this.openedNavItem.classList.contains("opening")){
      this.openedNavItem.classList.remove("opening");
      this.openedNavItem.classList.add("closing");
    } else {
      this.openedNavItem.classList.add("opening");
      this.openedNavItem.classList.remove("closing");
    }
    console.log(this.openedNavItem);
    console.log(this.openedNavItem.classList);
  }


  ngOnInit() {
    this.openedNavItem = document.getElementById("link-home")!;
  }

}