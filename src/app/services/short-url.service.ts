import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

  url='https://api-ssl.bitly.com/v4/shorten';
  token='08aa3741bb77c74db4dfecfdbc50a13cb8fb194d';

  constructor(private http:HttpClient){ }

  getUrlShort(nameUrl:string):Observable<any> {
    
    const HEADER = new HttpHeaders({Autorization: 'Bearer '+ this.token});
    const BODY =  {
      url_long: nameUrl
    }

    return this.http.post(this.url, BODY, { headers : HEADER });
  }
}
