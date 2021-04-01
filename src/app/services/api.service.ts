import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable,pipe, throwError } from 'rxjs';
import { Activity } from '../models/activity';
import { retry, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  base_path='http://localhost:3000/activities'
  traitementErreur(erreur: HttpErrorResponse){
    if(erreur.error instanceof ErrorEvent){
      console.error('Une erreur s est produite:',erreur.error.message);
    } else {
      console.error(
        'Code renvoyé par le backend  ${erreur.status}, ' +
        'le corps était: ${erreur.error}' );
     
    }
    return throwError(
           'Quelque chose est arrivé; Veuillez réessayer plus tard.'
    );
  };
// Pour obtenir la reponse json de serveur nous devons defenir le type Content comme suivant:
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }


  
  
  getActivity(activityID : string): Observable<Activity>{
    return this.httpClient.get<Activity>(API+"/"+activityID);
  }
  getActivities(): Observable<Activity[]>{
    return this.httpClient.get<Activity[]>(API);
  }

  creerActivity(element):  Observable<Activity> {
    return this.httpClient
    .post<Activity>(this.base_path, JSON.stringify(element), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.traitementErreur)
    )
  }

  trouverActivity_ID(id): Observable<Activity> {
    return this.httpClient
    .get<Activity>(this.base_path + '/' +  id)
    .pipe(
      retry(2),
      catchError(this.traitementErreur)
    )
  }

  afficherListe(): Observable<Activity> {
    return this.httpClient
    .get<Activity>(this.base_path)
    .pipe(
      retry(2),
      catchError(this.traitementErreur)
    )
  }

  updateActivity(id,element): Observable<Activity> {
    return this.httpClient
    .put<Activity>(this.base_path + '/' + id , JSON.stringify(element), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.traitementErreur)
    )
  }

  supprimerActivity(id): Observable<Activity> {
    return this.httpClient
    .delete<Activity>(this.base_path + '/' + id , this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.traitementErreur)
    )
  }
   
}

const API =  "http://localhost:3000/activities";
