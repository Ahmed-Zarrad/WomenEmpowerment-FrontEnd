import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from '../../Models/Offer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  private baseURL = 'http://localhost:9091/SpringMVC/servlet/Offers';

  constructor(private httpClient: HttpClient) { }

  getOffersList(): Observable<Offer[]>{
    return this.httpClient.get<Offer[]>(`${this.baseURL}`);
  }

  createOffer(offer: Offer): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, offer);
  }

  getOfferById(id: number): Observable<Offer>{
    return this.httpClient.get<Offer>(`${this.baseURL}/${id}`);
  }

  updateOffer(id: number, offer: Offer): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, offer);
  }

  deleteOffer(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
