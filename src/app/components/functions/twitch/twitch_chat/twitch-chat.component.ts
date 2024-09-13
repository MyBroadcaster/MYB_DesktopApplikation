import { Component, OnInit,Input} from '@angular/core';
import { TwitchChatService } from '../../../../services/angular/twitch-chat.service';
import { LocaldataService } from 'src/app/services/angular/localdata.service';
import { eel } from 'src/app/app.component';


@Component({
  selector: 'app-twitch-chat',
  templateUrl: './twitch-chat.component.html',
  styleUrls: ['./twitch-chat.component.scss']
})

export class TwitchChatComponent implements OnInit {
  messages: { username: string; message: string; color: string; badges: any }[] = [];
  newMessage: string = '';
  badges: any
  back: any
  emoteglobal: any
  constructor(private twitchChatService: TwitchChatService, private localData: LocaldataService) { }

  async ngOnInit() {
    this.messages = await eel.getmessages()()
    this.back = await eel.globalbadgesAPI(this.localData.getData('oauthToken'))();
    this.emoteglobal = await eel.getglobalEmote(this.localData.getData('oauthToken'))();
    this.twitchChatService.getMessageObservable().subscribe(message => {
      this.messages.push(message);
      
      var chatbox = document.getElementById('chat-box') as HTMLDivElement;
      chatbox.scrollTop = chatbox.scrollHeight;
    }
    );
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.twitchChatService.sendMessage(this.newMessage);
      this.newMessage = '';
    }
  }

  getBadges(badges: any): string[] {
    if (typeof badges === 'object' && badges !== null) {
      // Extrahiere die Badge-Namen als Array
      return Object.keys(badges);
    } else {
      return [];
    }
  }
  checkbadgesGlobal(bad: string){
    let rebadge = this.back.find((element: { set_id: any; }) => element.set_id === bad);
    return rebadge.versions[0].image_url_1x
  }

  checkemotes(message: string){
    console.log(message)
    const emoteRegex = /:(\w+):/g;
    const emoteCodes = message.match(emoteRegex);
    if (!emoteCodes) {
      return message;
    }
    console.log(emoteCodes)
    let parsedMessage = this.emoteglobal.find((element: { name: any; }) => element.name === emoteCodes);
    console.log(parsedMessage)
    return message;
  }
}