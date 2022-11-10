import { HttpClient, HttpParamsOptions, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor(private readonly httpClient:HttpClient) {
   }

   get(request:any):Observable<any>{
    return this.httpClient.get(request);
   }
}
