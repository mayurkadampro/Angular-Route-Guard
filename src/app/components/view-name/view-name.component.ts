import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-name',
  templateUrl: './view-name.component.html',
  styleUrls: ['./view-name.component.css']
})
export class ViewNameComponent implements OnInit {
  data : any= "";
  constructor(
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.data = this.activateRoute.snapshot.data;
  }

}
