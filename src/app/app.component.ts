import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'museums-front';
  openedNavItem!: HTMLElement;

  setAccordion(navItemId: string){

    // Initializing the navItem
    if (this.openedNavItem == null){
      this.openedNavItem = document.getElementById(navItemId)!;
      console.log("First IF: openNavItem assigned from null: ", this.openedNavItem)
    }
    
    // Case 1: navItem is different from the one opened already
    if (this.openedNavItem.id != navItemId){
      console.log("First IF: different openNavItem item: ", this.openedNavItem)
      // Closing opened navItem
      this.openedNavItem.classList.remove("opening");
      this.openedNavItem.classList.add("closing");
      this.openedNavItem.classList.remove("open");
      // Opening new navItem
      this.openedNavItem = document.getElementById(navItemId)!;
      this.openedNavItem.classList.remove("hide");
      this.openedNavItem.classList.add("opening");
      this.openedNavItem.classList.remove("closing");
      this.openedNavItem.classList.add("open");
    } else {
    // Case 2: navItem is the same that is opened or was last opened
      console.log("Second IF else: same openNavItem item: ", this.openedNavItem)
      if (this.openedNavItem.classList.contains("opening")){
        // Closing opened navItem
        this.openedNavItem.classList.remove("opening");
        this.openedNavItem.classList.add("closing");
        this.openedNavItem.classList.remove("open");
      } else {
        // Opening same navItem
        this.openedNavItem.classList.remove("hide");
        this.openedNavItem.classList.add("opening");
        this.openedNavItem.classList.remove("closing");
        this.openedNavItem.classList.add("open");
      }
    }
    console.log(this.openedNavItem.classList);
  }


  ngOnInit() {
    //this.openedNavItem = document.getElementById("")!;
  }

}