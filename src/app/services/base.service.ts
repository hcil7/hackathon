import {
  HttpClient,
  HttpParams,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  err: any;
  public baseUrl = 'https://api.themoviedb.org/3';
  public apiKey = 'ab69a0df5eb32fc955a967a098b56dc3';

  constructor(public http: HttpClient) {}

  getReq(url: any) {
    return this.http.get<any>(
      this.baseUrlUpdate(url) + `?api_key=${this.apiKey}`
    );
  }

  searchReq(url: any) {
    return this.http.get<any>(
      this.baseUrl + `/search/movie?api_key=${this.apiKey}&query=${url}`
    );
  }

  protected baseUrlUpdate(url: string): string {
    return url.startsWith('/') ? this.baseUrl + url : url;
  }
}
