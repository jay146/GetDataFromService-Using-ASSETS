import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Jkemployee } from './employeei';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EsService {

private _url="/assets/data/employeedata.json";
  constructor(private http:HttpClient) { }

  getEmployees():Observable<Jkemployee[]>
  {
    return this.http.get<Jkemployee[]>(this._url).pipe(catchError(this.errorHandler));
}
  errorHandler(error: HttpErrorResponse)
   {
    return throwError(error.message || "Unknown server error");
  }

}
