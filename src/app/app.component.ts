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

  setAccordion(navItemId: string){
    if (this.openedNavItem.id != navItemId){
      this.openedNavItem.classList.remove("opening");
      this.openedNavItem.classList.add("closing");
      setTimeout(()=>{
        this.openedNavItem = document.getElementById(navItemId)!;
        this.openedNavItem.classList.add("opening");
      }, 2000);
    } else {
      if (this.openedNavItem.classList.contains("opening")){
        this.openedNavItem.classList.remove("opening");
        this.openedNavItem.classList.add("closing");
      } else {
        this.openedNavItem.classList.add("opening");
        this.openedNavItem.classList.remove("closing");
      }
    }
    console.log(this.openedNavItem);
    console.log(this.openedNavItem.classList);
  }


  ngOnInit() {
    this.openedNavItem = document.getElementById("link-home")!;
  }

}