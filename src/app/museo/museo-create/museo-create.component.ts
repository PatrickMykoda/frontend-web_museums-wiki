import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Museo } from '../museo';
import { MuseoService } from '../museo.service';
import { Router } from '@angular/router';

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
  warningText!: string;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private museoService: MuseoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.museoForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      description: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(1000)]],
      address: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(250)]],
      city: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(250)]],
      image: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(1000), Validators.pattern('(http(s?):)([/|.|\\w|\\s|-])*\\.(?:jpg|gif|png)')]],
    })
    this.animationOn = true;
    this.animationButton = document.getElementById('btn-animation-create-museums')!;
    this.animationButton.addEventListener('click', () => this.toggleAnimation());
    this.setInputIcons();
  }

  createMuseo(museo: Museo){
    this.museoService.createMuseo(museo).subscribe(museo=>{
    console.info("El museo ha sido creado: ", museo)
    this.toastr.success("Confirmación", "Museo creado")
    this.museoForm.reset();
    this.router.navigate(['/museums', museo.id]);
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

  setInputIcons(){
    let inputs = Array.from(document.getElementsByClassName('input'));
    let pseudoSpans = Array.from(document.getElementsByClassName('input-pseudo-span')) as HTMLElement[];
    let i = 0;
    inputs.forEach(element => {
      let placeholder = element.getAttribute('placeholder')!;
      pseudoSpans[i].innerText = placeholder;

      // Event listener for removing the icons when the user clicks on the input
      element.addEventListener('focus', () => {
        let inputName = element.getAttribute('formControlName');
        document.getElementById(`${inputName}-pen-icon`)!.classList.add('hide');
        this.hideWarningIcon(inputName!);
      });

      // Event listener for checking if the input is valid
      element.addEventListener('blur', () => {
        let inputName = element.getAttribute('formControlName');
        let labelName = (element as HTMLInputElement).labels![0].textContent?.slice(0, -1);
        this.adjustIconPosition(inputName!);
        this.checkInputValid(inputName!, labelName!);
      });

      i++;
    })
  }

  checkInputValid(inputName: string, labelName: string){
    if(this.getWarningText(inputName, labelName) != ""){
      this.showWarningIcon(inputName!);
    }
  }

  getWarningText(inputName: string, labelName: string){
    // In case there is no input in an input where it is required
    if (this.museoForm.get(`${inputName}`)!.hasError('required')){
      return `El campo '${labelName}' es requerido`;
    }
    // In case there is no input in an input where it is required
    else if (this.museoForm.get(`${inputName}`)!.hasError('minlength')){
      return `La entrada para el campo '${labelName}' es demasiado corta`;
    }

    else if (this.museoForm.get(`${inputName}`)!.hasError('maxlength')){
      return `La entrada para el campo '${labelName}' es demasiado larga`;
    }

    else if (this.museoForm.get(`${inputName}`)!.hasError('pattern')){
      return `La entrada para el campo '${labelName}' no tiene el formato correcto.`;
    } 
    
    else {
      return "";
    }
  }

  adjustIconPosition(inputName: string){
    let inputElement = document.getElementById(inputName);
    let pseudoSpan = document.getElementById(`${inputName}-pseudo-span`)!;
    let inputValue = (inputElement as HTMLInputElement).value;

    if(inputValue != ""){
      if(inputValue.length > 50){
        pseudoSpan.innerText = "";
      } else {
        pseudoSpan.innerText = inputValue;
      }
    }else {
      let placeholder = inputElement!.getAttribute('placeholder')!;
      pseudoSpan.innerText = placeholder;
    }
  }

  showWarningIcon(inputName: string){
    let warningIcon = document.getElementById(`${inputName}-warning-icon`)!;
    warningIcon.classList.remove('hide');
  }

  hideWarningIcon(inputName: string){
    document.getElementById(`${inputName}-warning-icon`)!.classList.add('hide');
  }
  
  handleWarningIconClick(inputName: string){
    let inputElement = document.getElementById(inputName);
    let labelName = (inputElement as HTMLInputElement).labels![0].textContent?.slice(0, -1)!;
    this.warningText = this.getWarningText(inputName, labelName);
    console.log("This is the warning text: ", this.warningText);
    let warningElement = document.getElementsByClassName('warning-container')[0] as HTMLElement;
    console.log("This is the warning element: ", warningElement);
    warningElement.classList.remove('hide');
  }

  closeWarning(){
    let warningElement = document.getElementsByClassName('warning-container')[0] as HTMLElement;
    warningElement.classList.add('hide');
  }

}
