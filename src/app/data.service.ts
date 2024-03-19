// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {

//   private messageSubject = new BehaviorSubject<string[]>([]);
//   messages$ = this.messageSubject.asObservable();

//   addNewMessage(newMessage: string) {
//     this.messageSubject.next([...this.messageSubject.value, newMessage]);
//   }
// }

import { Injectable, signal } from '@angular/core';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data = signal<Data>({
    messages: []
  });

  addNewMessage(newMessage: string) {
    this.data.update((d) => {
      d.messages.push(newMessage);
      return d;
    });
  }
}