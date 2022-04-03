import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cours } from 'src/app/model/cours';

/**
 * <app-saisie (coursEvent)="submitCours($event)></app-saisie>"
 */
@Component({
  selector: 'app-saisie',
  templateUrl: './saisie.component.html',
  styleUrls: ['./saisie.component.scss'],
})
export class SaisieComponent implements OnInit {

  @Output() coursEvent: EventEmitter<Cours> = new EventEmitter<Cours>();
  cours: Cours = new Cours();

  constructor() { }

  ngOnInit() { }

  ajoutCours(cours: Cours): void {
    this.coursEvent.emit(cours);
  }

}
