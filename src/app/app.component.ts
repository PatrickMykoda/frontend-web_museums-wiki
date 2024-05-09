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
    console.log("OpenedNavItem at the begin: ", this.openedNavItem)
    

    if (this.openedNavItem == null){
      this.openedNavItem = document.getElementById(navItemId)!;
      console.log("First IF: openNavItem assigned from null: ", this.openedNavItem)
    }
    
    if (this.openedNavItem.id != navItemId){
      console.log("First IF: different openNavItem item: ", this.openedNavItem)
      // Closing opened navItem
      this.openedNavItem.classList.remove("opening");
      this.openedNavItem.classList.add("closing");
      // Opening new navItem
      this.openedNavItem = document.getElementById(navItemId)!;
      this.openedNavItem.classList.remove("hide");
      this.openedNavItem.classList.add("opening");
      this.openedNavItem.classList.remove("closing");
    } else {
      console.log("Second IF else: same openNavItem item: ", this.openedNavItem)
      if (this.openedNavItem.classList.contains("opening")){
        this.openedNavItem.classList.remove("opening");
        this.openedNavItem.classList.add("closing");
      } else {
        this.openedNavItem.classList.remove("hide");
        this.openedNavItem.classList.add("opening");
        this.openedNavItem.classList.remove("closing");
      }
    }
    console.log(this.openedNavItem.classList);
  }


  ngOnInit() {
    //this.openedNavItem = document.getElementById("")!;
  }

}