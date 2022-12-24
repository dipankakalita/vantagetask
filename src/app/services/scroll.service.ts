import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpHeaders,HttpParams} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(private http: HttpClient) {}
  private httpOptions: any;

  // get images
  getImages(page:number,limit:number): Observable<any> {
    const ajax = this.http.get<any>('https://picsum.photos/v2/list?page='+page+'&limit='+limit,this.httpOptions).pipe(catchError(this.handleError));
    return ajax;
  }

  handleError(error: HttpErrorResponse): Observable<any> {
    let errorMsg = '';
    if(error.error instanceof ErrorEvent) {
      errorMsg = "Network error! Please try again later.";
    } else {
      errorMsg = error.error.message;
    }
    return throwError(errorMsg);
  }
}
