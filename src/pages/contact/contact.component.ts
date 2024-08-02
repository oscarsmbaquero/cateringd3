import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FloatLabelModule, FormsModule, InputTextModule, ButtonModule, InputTextareaModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  value: string | undefined;

  loading: boolean = false;

  load() {
      this.loading = true;

      setTimeout(() => {
          this.loading = false
      }, 2000);
  }

}
