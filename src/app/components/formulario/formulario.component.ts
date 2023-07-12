import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  public name: string;
  public lastName: string;
  public email: string;
  public phone: string;

  constructor(){
    this.name = '';
    this.lastName = '';
    this.email = '';
    this.phone = '';
  }

  submitForm() {
    const formData = {
      name: this.name || '',
      lastName: this.lastName  || '',
      email: this.email  || '',
      phone: this.phone  || '',
    };

    localStorage.setItem('formData', JSON.stringify(formData));
    console.log('Dados do formulário salvo no localStorage:', formData);
    alert('Formuláro enviado!');
  }
}
