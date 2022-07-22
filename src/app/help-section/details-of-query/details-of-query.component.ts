import { Component, OnInit } from '@angular/core';
import { helpSectionService } from 'src/app/shared/helpSection.service';
import { queryModel } from 'src/app/shared/queryModel';

@Component({
  selector: 'app-details-of-query',
  templateUrl: './details-of-query.component.html',
  styleUrls: ['./details-of-query.component.css']
})
export class DetailsOfQueryComponent implements OnInit {

  constructor(private helpsecService: helpSectionService) { }

  queryDetails: queryModel[];
  noQueries: boolean = true;



  ngOnInit() {
    this.queryDetails = this.helpsecService.queryViewer();
    this.helpsecService.Queries.subscribe( (deets: queryModel[]) => {
      this.noQueries = false;
      this.queryDetails = deets;
    })
  }

}
