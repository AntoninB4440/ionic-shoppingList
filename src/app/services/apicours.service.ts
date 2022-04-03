import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cours } from '../model/cours';

@Injectable({
  providedIn: 'root'
})
export class ApicoursService {

  url = 'http://localhost:3000/cours';

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Cours[]> {
    return this.httpClient.get<Cours[]>(`${this.url}`);
  }

  addCours(cours: Cours): Observable<Cours>{
    return this.httpClient.post<Cours>(this.url, cours);
  }

  updateCours(cours: Cours): Observable<Cours>{
    return this.httpClient.put<Cours>(`${this.url}/${cours.id}`, cours);
  }

  deleteCours(id: string): Observable<Cours>{
    return this.httpClient.delete<Cours>(`${this.url}/${id}`);
  }
}
