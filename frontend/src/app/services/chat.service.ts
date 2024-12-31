import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map, Observable } from 'rxjs';
import { ServerResponse } from '../types/ws.types';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) { }

  public sendMessage(message: string){
    this.socket.emit("message", message)
  }

  public listMessage(): Observable<ServerResponse> {
    return this.socket.fromEvent<ServerResponse>('received').pipe(
      map((data: ServerResponse) => data)
    );
  }
}
