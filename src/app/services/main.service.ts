import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
@Injectable({
  providedIn: 'root',
})
export class MainService extends BaseService {
  constructor(private base: BaseService) {
    super(base.http);
  }
  //question service

  public searchMovies(query: string) {
    return this.searchReq(`/${query}`);
  }
  public getMovies(query: string) {
    return this.getReq(`/${query}`);
  }
}
