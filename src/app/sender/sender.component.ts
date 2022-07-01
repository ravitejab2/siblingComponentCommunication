import { Component, OnInit } from '@angular/core';
import { SendDataService } from '../send-data.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {

  constructor(private eventService:SendDataService) { }
  senderData!:string;
  receiveData!:string;
  ngOnInit(): void {
    this.eventService.on<string>().subscribe(
      data =>{
        this.receiveData= data;
      }
    )
  }

  send(){
    this.eventService.emit<string>(this.senderData);
  }


}
