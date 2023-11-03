import { Component } from '@angular/core';

const channel = localStorage.getItem("loginName") || "{}";


@Component({
  selector: 'app-twitch-chat',
  templateUrl: './twitch-chat.component.html',
  styleUrls: ['./twitch-chat.component.scss']
})

export class TwitchChatComponent {
 channel = channel
}