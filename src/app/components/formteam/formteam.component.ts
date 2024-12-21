import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { team } from 'src/app/models/team';
import { ConsumerService } from 'src/app/services/consumer.service';

@Component({
  selector: 'app-formteam',
  templateUrl: './formteam.component.html',
  styleUrls: ['./formteam.component.css']
})
export class FormteamComponent implements OnInit, OnDestroy {

  constructor(private activated: ActivatedRoute,
    private _consumerService:ConsumerService,private r:Router
  ){}

  team!: team;

  //team!: team;

  id!: number;

  ngOnDestroy(): void {}
  
  ngOnInit(): void {
    this.team =new team;
    //this.team=new team;

    this.activated.params.subscribe({
      next: (param)=>{
        if (param['id'] != undefined) {
          this.id = param['id']
          this._consumerService.get<team>('team', param['id'])
            .subscribe({
           next:(data)=>this.team=data
         })
        }
      }
    });
  }

  add(f:any,title:any){
    
    //this.team.available = true;

    if (this.id != undefined) {
      this._consumerService
        .update<team>('team', this.team, this.id)
        .subscribe({
          next: () => this.r.navigate(['/showteams']),
        });
    }
    else {
      this._consumerService.add<team>('category', this.team)
        .subscribe({
        next: () => this.r.navigate(['/showteams']),
      });
    }
  }
}
