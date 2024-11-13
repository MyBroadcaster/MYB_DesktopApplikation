// twitch-chat.service.ts
import { Injectable } from '@angular/core';
import { Client, Options, ChatUserstate } from 'tmi.js';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TwitchChatService {
  private client: Client;
  private messageSubject: Subject<{ username: string; message: string; color: string; badges: string }> = new Subject<{ username: string; message: string; color: string; badges: string }>();

  constructor() {
    const username = localStorage.getItem('loginName') || '';
    const password = localStorage.getItem('oauthToken') || '';
    const channel = localStorage.getItem('loginName') || '';

    const options: Options = {
      identity: {
        username: username,
        password: password
      },
      channels: [channel, "maxim"]
    };

    this.client = new Client(options);

    this.client.on('message', (channel: string, userstate: ChatUserstate, message: string, self: boolean) => {
      if (self) return; // Ignore messages from the bot itself

      const username = userstate['display-name'] || 'UnknownUser';
      const userColor = userstate.color || '#FFFFFF'; // Default to white if no color is specified
      const badges: any = userstate.badges || '';

      const formattedMessage = {
        username: username,
        message: message,
        color: userColor,
        badges: badges
      };
      this.messageSubject.next(formattedMessage);
    });

    this.client.connect();
  }

  getMessageObservable() {
    return this.messageSubject.asObservable();
  }

  sendMessage(message: string) {
    // Hier wird die Nachricht an den Twitch-Chat gesendet
    this.client.say(localStorage.getItem('loginName') || '', message);

    // Füge die gesendete Nachricht zur Anzeige hinzu
    const ownUsername = localStorage.getItem('loginName') || 'UnknownUser';
    const ownMessage = {
      username: ownUsername,
      message: `${message}`,
      color: '#FFFFFF',
      badges: ''
    };
    this.messageSubject.next(ownMessage);
  }
}
