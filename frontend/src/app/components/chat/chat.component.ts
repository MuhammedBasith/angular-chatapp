import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { ServerResponse } from '../../types/ws.types';

@Component({
  selector: 'app-chat',
  standalone: false,
  
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {

  public message: string = ''
  public messages: string[] = []

  constructor(private chatService: ChatService) {}
  ngOnInit(): void {
    this.listMessage()
  }

  public sendMessage(){
    this.messages.push(this.message)
    this.chatService.sendMessage(this.message)
    this.message = ''
  }

  public listMessage(){
    this.chatService.listMessage().subscribe((data: ServerResponse) => {
      console.log(data);
      this.messages.push(data.data)
    })
  }

}
