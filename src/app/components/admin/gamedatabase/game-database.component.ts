import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { eel } from 'src/app/app.component';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-game-database',
  templateUrl: './game-database.component.html',
  styleUrls: ['./game-database.component.scss'],
  providers: [MessageService]
})
export class GameDatabaseComponent implements OnInit{
  header: any;
  listarray_leng: any;
  listarray: any;
  new_game = { title: "", executable:"", category: "", window:  ""}
  checked: any;
  deleterows: any[] = [];
  loadtable: boolean | undefined 
  scanprocess: boolean = false;
  processes: any[]|undefined;
  btnloadscan = false
  loadbtn: boolean = false
  constructor(private router: Router, private messageService: MessageService) {}

  games : any
  async ngOnInit(){
    await this.autoBotDb()
  }

  async scanprocessstart() {
    this.loadbtn = true
    this.processes = []
    if (this.scanprocess == false){
      this.btnloadscan = true
      this.processes = await eel.processlist_Scanning()();
      this.scanprocess = true
      this.btnloadscan = false}
    else {
      this.scanprocess = false
    }
    this.loadbtn = false
  }
  async autoBotDb(){
    this.loadtable = true;
    let apps = await eel.getgames("")();
    this.header = ["ID", "Anwendung", "Executable", "Kategorie","Window",""]
    this.games = apps
    this.listarray_leng = apps.length
    console.log(this.games)
    this.loadtable = false
  }
  navigate(){
    this.router.navigate(["/administration"])
  }

  async deletegame(){
    if (this.deleterows.length < 1){
      this.messageService.add({ severity: 'error', summary: 'Error' , detail: 'Kein Datensatz ausgewählt' });
    }
    else{    
      await eel.deletegames(this.deleterows)()
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Datensatz erfolgreich gelöscht' });
      await this.autoBotDb()
    }
  }

  deletedrows(id: any){
    if (this.deleterows.includes(id) == false){
      this.deleterows.push(id)
    }
    else{
      this.deleterows = this.deleterows.filter(element => element !== id);
    }
    console.log(this.deleterows)
  }

  async addnewgame(){
    console.log(this.new_game)
    let apps = await eel.addnewgame(this.new_game)();
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Datensatz erfolgreich erstellt' });
    this.new_game = { title: "", executable:"", category: "", window:  ""}
    await this.autoBotDb()
  }
}
