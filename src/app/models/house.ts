export class House {
    name: string = '';
    patronus: string = '';
    age: string = '';
    image: string = '';
    constructor(data: any = {}) {
      this.name = data.name ? data.name : '';
      this.patronus = data.patronus ? data.patronus : '';
      this.age = data.age ? data.age : '';
      this.image = data.image ? data.image : '';
    }
  }