import { Component, OnInit } from '@angular/core';
import { TitleService } from '../services/titleService/title.service';


export interface Estudiante {
  avatar: string;
  nombre: string;
  presente: boolean;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {

  estudiantes: Estudiante[] = [
    {
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Juan',
      nombre: 'Juan',
      presente: true
    },
    {
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pedro',
      nombre: 'Pedro',
      presente: false
    },
    {
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
      nombre: 'Maria',
      presente: true
    }
  ];

  constructor(
    private _titleService: TitleService
  ) { }

  ngOnInit() {
    this._titleService.setTitle('Asistencia'); // Establece el título inicial
  }
}
