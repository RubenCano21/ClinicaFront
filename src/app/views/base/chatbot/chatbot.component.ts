import { Component } from '@angular/core';
import {ChatbotService} from "./chatbot.service";
import {FormsModule} from "@angular/forms";
import {CardBodyComponent, CardComponent, CardHeaderComponent} from "@coreui/angular";
import {NgIf} from "@angular/common";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [
    FormsModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    NgIf
  ],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss'
})
export class ChatbotComponent {

  phoneNumber = '';
  message = '';



  response: string  = '';

  constructor(private chatbotService: ChatbotService,
              private http: HttpClient) { }

  sendMessage() {
    this.chatbotService.sendMessage(this.phoneNumber, this.message).subscribe({
      next: (data) => {
        this.response = data;
        console.log('Mensaje enviado:', data);
      },
      error: (error) => {
        console.error('Error al enviar el mensaje:', error);
      }
    });
  }




}
