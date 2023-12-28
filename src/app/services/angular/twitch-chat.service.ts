// twitch-chat.service.ts
import { Injectable } from '@angular/core';
import { Client, Options, ChatUserstate, Badges } from 'tmi.js';
import { Subject } from 'rxjs';
import { LocaldataService } from './localdata.service';

@Injectable({
  providedIn: 'root'
})
export class TwitchChatService {
  private client: Client;
  private messageSubject: Subject<{ username: string; message: string; color: string; badges: string }> = new Subject<{ username: string; message: string; color: string; badges: string }>();

  constructor(private localData: LocaldataService) {
    const username = this.localData.getData('loginName') || '';
    const password = this.localData.getData('oauthToken') || '';
    const channel = this.localData.getData('loginName') || '';

    const options: Options = {
      identity: {
        username: username,
        password: password
      },
      channels: [channel]
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
    this.client.say(this.localData.getData('loginName') || '', message);

    // Füge die gesendete Nachricht zur Anzeige hinzu
    const ownUsername = this.localData.getData('loginName') || 'UnknownUser';
    const ownMessage = {
      username: ownUsername,
      message: `${message}`,
      color: '#FFFFFF',
      badges: ''
    };
    this.messageSubject.next(ownMessage);
  }
}
