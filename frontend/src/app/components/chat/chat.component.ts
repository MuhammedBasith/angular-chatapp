import { Component } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  standalone: false,
  
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

  public message: string = ''
  public messages: string[] = []

  constructor(private chatService: ChatService) {}

  public sendMessage(){
    this.messages.push(this.message)
    this.chatService.sendMessage(this.message)
    this.message = ''
  }

  public listMessage(){
    
  }

}
