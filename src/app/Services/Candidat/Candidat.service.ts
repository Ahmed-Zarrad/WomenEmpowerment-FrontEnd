import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidat } from '../../Models/Candidat';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  private baseURL = 'http://localhost:9091/SpringMVC/servlet/Candidats';

  constructor(private httpClient: HttpClient) { }

  getCandidatsList(): Observable<Candidat[]>{
    return this.httpClient.get<Candidat[]>(`${this.baseURL}`);
  }

  createCandidat(candidat: Candidat): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, candidat);
  }

  getCandidatById(id: number): Observable<Candidat>{
    return this.httpClient.get<Candidat>(`${this.baseURL}/${id}`);
  }

  updateCandidat(id: number, candidat: Candidat): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, candidat);
  }

  deleteCandidat(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
