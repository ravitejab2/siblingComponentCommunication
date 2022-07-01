import { Component, OnInit } from '@angular/core';
import { SendDataService } from '../send-data.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {

  constructor(private eventService:SendDataService) { }
  sendData!:string;
  receiveData!:string;

  ngOnInit(): void {
    this.eventService.on<string>().subscribe(
      data =>{
        this.receiveData= data;
      }
    )
  }
  send(){
    this.eventService.emit<string>(this.sendData);
  }



}
