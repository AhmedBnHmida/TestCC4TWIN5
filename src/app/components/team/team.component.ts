import { Component, EventEmitter, Input, OnChanges, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { team } from 'src/app/models/team';
import { ConsumerService } from 'src/app/services/consumer.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnChanges {

  constructor(private _consumerService:ConsumerService){}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }


  @Input() data!: team;
  
  // @Input({ required: true }) title!: string;
  // @Input({ transform : (value:string)=> parseInt(value) }) title!: number;
  @Input({ alias: 't' }) title!: string;
  @Output() d = new EventEmitter();
  deleteChild() {
    this.d.emit(this.data.id);
  }

}
