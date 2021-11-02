import { Component, OnInit } from '@angular/core';
import { ShortUrlService } from 'src/app/services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent implements OnInit {

  nameUrl:string;
  urlShort:string;
  urlProcessed:boolean;


  constructor(private _shortUrlService: ShortUrlService) { 
    this.nameUrl='';
    this.urlShort='';
    this.urlProcessed=false;
  }

  ngOnInit(): void {
  }

  geturl(){
    this.urlProcessed=false;
    console.log(this.nameUrl);
    this._shortUrlService.getUrlShort(this.nameUrl).subscribe(data => {
      console.log(data);
      this.urlProcessed=true;
      this.urlShort=data.link;
    })
    
  }




}
