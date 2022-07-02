import { Observable } from 'rxjs';

export class InputModel<T> {
    data: T;
    refreshTrigger: Observable<any>;
    constructor(d: any = null, refresh: Observable<any> = new Observable<any>()) {
        this.data = d;
        this.refreshTrigger = refresh;
    }

    updateData(data:T) {
        this.data = data;
    }
}
  
