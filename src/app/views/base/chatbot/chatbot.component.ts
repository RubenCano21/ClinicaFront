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

  messageData = {
    from: '',
    body: ''
  };

  response: string | null = null;

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

  reviewMessage() {
    const url = 'http://localhost:8080/api/chatbot/webhook';

    this.http.post<{ message: string}>(url, this.messageData).subscribe({
      next: (data) => {
        this.response = data.message;
        console.log('Mensaje revisado:', data);
      },
      error: (error) => {
        console.error('Error al revisar el mensaje:', error);
      }
    });
  }









}
