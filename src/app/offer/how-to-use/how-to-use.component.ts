import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OffersService } from '../../offers.service'

@Component({
  selector: 'app-how-to-use',
  templateUrl: './how-to-use.component.html',
  styleUrls: ['./how-to-use.component.css'],
  providers: [OffersService]
})
export class HowToUseComponent implements OnInit {

  public description: string

  constructor(
    private route: ActivatedRoute,
    private service: OffersService
  ) { }

  ngOnInit() {
    this.service.getHowToUseById(this.route.parent.snapshot.params['id'])
    .then((description: string) => {
      this.description = description
    })
  }

}
