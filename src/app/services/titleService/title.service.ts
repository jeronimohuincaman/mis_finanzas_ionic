import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private titleSource = new BehaviorSubject<string>(''); // Titulo inicial vacío
  currentTitle$ = this.titleSource.asObservable(); // Observable para el título

  setTitle(title: string) {
    this.titleSource.next(title); // Actualiza el título
  }
}
