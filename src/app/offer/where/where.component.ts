import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router'
import { OffersService } from '../../offers.service'

@Component({
  selector: 'app-where',
  templateUrl: './where.component.html',
  styleUrls: ['./where.component.css'],
  providers: [OffersService]
})
export class WhereComponent implements OnInit {

  public description: string

  constructor(
    private route: ActivatedRoute,
    private service: OffersService
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      this.service.getWhereById(params.id)
      .then((description: string) => {
        this.description = description
      })
    })
  }

}
