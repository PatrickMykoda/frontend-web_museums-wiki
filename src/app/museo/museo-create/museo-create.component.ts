import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Museo } from '../museo';
import { MuseoService } from '../museo.service';

@Component({
  selector: 'app-museo-create',
  templateUrl: './museo-create.component.html',
  styleUrls: ['./museo-create.component.css']
})
export class MuseoCreateComponent implements OnInit {

  museoForm!: FormGroup;
  animationButton!: HTMLElement;
  container!: HTMLElement;
  animationOn!: boolean;
  animationIcon!: HTMLElement;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private museoService: MuseoService
  ) { }

  ngOnInit() {
    this.museoForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      description: ["", [Validators.required]],
      address: ["", Validators.required],
      city: ["", Validators.required],
      image: ["", Validators.required]
    })
    this.animationOn = true;
    this.animationButton = document.getElementById('btn-animation-create-museums')!;
    this.animationButton.addEventListener('click', () => this.toggleAnimation());
    this.setEditIcon();
  }

  createMuseo(museo: Museo){
    this.museoService.createMuseo(museo).subscribe(museo=>{
    console.info("El museo ha sido creado: ", museo)
    this.toastr.success("Confirmación", "Museo creado")
    this.museoForm.reset();
    });
  }

  cancelCreation(){
    this.museoForm.reset();
  }

  toggleAnimation(){
    this.container = document.getElementById('create-museo-container')!;
    this.animationIcon = document.getElementById('animation-icon-create-museums')!;

    if(this.animationOn){
      // Code executes if the animationOn flag is true an changes the background-image to the current image of the animation
      let styles = window.getComputedStyle(this.container);
      let currentBackground = styles.backgroundImage;
      let list = currentBackground.split(" ");
      console.log("This is the list: ",list);

      if (list.length == 1){
        // Firefox doesn't cross-fade which is why there might only one url in the list
        currentBackground = list[0];
      } else {
        // Browsers like Chrome and Edge cross-fade which is why there are more image URLs in the list
        currentBackground = list[2].slice(0, list[2].length - 1);

      }
      console.log("This is the single url: ",currentBackground)
      this.container.style.backgroundImage = currentBackground;
      this.animationOn = false;
      this.animationIcon.classList.remove('fa-circle-pause');
      this.animationIcon.classList.add('fa-circle-play');
    } else {
      this.animationOn = true;
      this.animationIcon.classList.remove('fa-circle-play');
      this.animationIcon.classList.add('fa-circle-pause');
    }
    
    this.container.classList.toggle('hide-animation');
    
  }

  setEditIcon(){
    let placeholders = Array.from(document.getElementsByClassName('text-input'));
    let pseudoSpans = Array.from(document.getElementsByClassName('input-pseudo-span'));
    let i = 0;
    placeholders.forEach(element => {
      let placeholder = element.getAttribute('placeholder');
      pseudoSpans[i].innerHTML = `${placeholder!} <i class="fa-solid fa-pen-fancy pen-icon"></i>`;
      i++;
    })
  }

}
