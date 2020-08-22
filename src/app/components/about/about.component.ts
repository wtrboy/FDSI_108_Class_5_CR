import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  // when the component is created
  constructor(private data: DataService) { }

  // exec when component is being initialized ready to be displayed
  ngOnInit(): void {
    console.log("Data service holds: ", this.data.getUsers())
  }
}
