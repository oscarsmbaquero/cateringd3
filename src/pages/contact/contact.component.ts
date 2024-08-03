import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FloatLabelModule, FormsModule, InputTextModule, ButtonModule, InputTextareaModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  value: string | undefined;

  public contact: FormGroup;

  @ViewChild('parallaxBackground') parallaxBackground!: ElementRef ;

  loading: boolean = false;
  public submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private renderer: Renderer2
    
  ) {
    this.contact = this.formBuilder.group({
      name: ['', [Validators.required ]],
      mail: ['', [Validators.required]],
      tlf: [''],
      messagge: ['', [Validators.required]],
    });
  }

  load() {
      this.loading = true;

      setTimeout(() => {
          this.loading = false
      }, 2000);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const offset = window.pageYOffset;
    this.renderer.setStyle(
      this.parallaxBackground.nativeElement,
      'backgroundPositionY',
      `${offset * 0.5}px`
    );
  }

  public onSubmit(): void {
    console.log('entro');
    
    // this.submitted = true;
    // if (this.contact.valid) {
      const newMessagge: any ={
        name: this.contact.get('name')?.value,
        mail: this.contact.get('mail')?.value,
        tlf: this.contact.get('tlf')?.value,
        messagge: this.contact.get('messagge')?.value,
      }
      console.log(newMessagge);
      
      // const newProduct: any = {
      //   name: this.anadirProduct.get('name')?.value,
      //   description: this.anadirProduct.get('description')?.value,
      //   pCompra: parseFloat(this.anadirProduct.get('pCompra')?.value),
      //   pvp: parseFloat(this.anadirProduct.get('pvp')?.value),
      //   unidades: parseFloat(this.anadirProduct.get('unidades')?.value),
      //   image: this.anadirProduct.get('image')?.value,
      // };  
      // this.storeService.addProduct(newProduct).subscribe(
      //   (response: any) => {
      //     console.log('Datos enviados con éxito');
      //     // this.loading = false;
      //     // this.snackBar.open(
      //     //   'El producto ha sido añadido correctamente',
      //     //   'Cerrar',
      //     //   {
      //     //     duration: 3000,
      //     //   }
      //     // );
      //     this.router.navigate(['products']);
      //   },
      //   (error) => {
      //     console.error('Error al enviar los datos', error);
      //   }
      // );
    //}
  }

}
