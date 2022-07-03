import { Component, OnInit } from '@angular/core';

interface HomeInfoCards {
  title:string;
  info: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cards: HomeInfoCards[] = []

  constructor() { }

  ngOnInit(): void {
    this.cards = [
      { title: 'Characters', info:'in this Section you can consult your favorite character of the school. Filtered by house.' },
      { title: 'Students', info:'in this section you can consult the list of our students. Also can, send us a request for admission' },
      { title: 'Teachers', info:'in this section you can consult our teachers squad and filter then by name' }
    ]
  }

}
