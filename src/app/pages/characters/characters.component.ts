import { Component, OnInit } from '@angular/core';
import { InputModel } from '@models/index';
import { CharactersService } from '@services/index';
import { BehaviorSubject } from 'rxjs';

interface HousePicker {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters: any[] = [];
  houses: HousePicker[] = [
    { value: 'slytherin', viewValue: 'Slytherin' },
    { value: 'gryffindor', viewValue: 'Gryffindor' },
    { value: 'ravenclaw', viewValue: 'Ravenclaw' },
    { value: 'hufflepuff', viewValue: 'Hufflepuff' }
  ];
  refreshTableTrigger: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  inputBasicReportTableComponent: InputModel<any> = new InputModel<any>();
  selectedHouse = this.houses[0].value;

  constructor(public charactersServise: CharactersService) { }

  ngOnInit(): void {
    this.inputBasicReportTableComponent = new InputModel<any>([], this.refreshTableTrigger.asObservable());
    this.updateCharacters(this.houses[0].value);
  }

  updateCharacters(house:string) {
    this.charactersServise.getCharacters(house).subscribe(characters => {
      this.refreshTableTrigger.next(characters);
    })
  }
}
