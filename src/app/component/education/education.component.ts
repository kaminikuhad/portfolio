import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  educationDetails:any;
  constructor(private appService:AppService) { }
  ngOnInit() {
    this.educationDetails = this.appService.education()
  }

}
