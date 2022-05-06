import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CharityEvent } from 'src/app/Models/CharityEvent';
import { ApiResponse } from 'src/app/Models/api.response';

@Injectable({
  providedIn: 'root'
})
export class CharityEventService {

  addEventURL="http://localhost:9091/SpringMVC/servlet/ajouterCharityEvent";
  retrieveallEventURL="http://localhost:9091/SpringMVC/servlet/retrieveallEvent";
  deleteEventURL="http://localhost:9091/SpringMVC/servlet";
  affectEventToClientURL:"http://localhost:9091/SpringMVC/servlet/FaireReservation";
  addReservationURL:"http://localhost:9091/SpringMVC/servlet/addReservation";


  constructor(private Eventhttp: HttpClient, private router: Router) { }

  public ajouterCharityEvent(charityevent:CharityEvent){
    return this.Eventhttp.post<ApiResponse>("http://localhost:9091/SpringMVC/servlet/ajouterCharityEvent", charityevent);
  }

  retrieveallEvent(): Observable<any> {
    return this.Eventhttp.get(this.retrieveallEventURL);
  }
  deleteEvent(idEvent: number): Observable<any> {
    return this.Eventhttp.delete(`${this.deleteEventURL}/deleteCharityEventById/${idEvent}`, { responseType: 'text' });
  }
  affectEventToClient(charityEvent: CharityEvent): Observable<any>  {
    return this.Eventhttp.post(this. affectEventToClientURL, charityEvent);
  }

  addReservation(charityEvent: CharityEvent): Observable<any> {
    return this.Eventhttp.post(this.addReservationURL, charityEvent);
  }
  /*
  update(idFacture: number, value): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${idFacture}`, value,httpOptions);
  }
*/
}
