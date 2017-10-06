import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
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
    this.service.getWhereById(this.route.parent.snapshot.params['id'])
    .then((description: string) => {
      this.description = description
    })
  }

}
