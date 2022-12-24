import { Component } from '@angular/core';
import { ScrollService } from "../services/scroll.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-infinite-image-scroll',
  templateUrl: './infinite-image-scroll.component.html',
  styleUrls: ['./infinite-image-scroll.component.scss']
  
})
export class InfiniteImageScrollComponent {
  throttle:number = 300;
  scrollDistance:number = 1;
  scrollUpDistance:number = 2;

  private page:number = 1;
  private limit:number = 40;
  images:any[] = [
    {
      'column': '1',
      'img': []
    },
    {
      'column': '2',
      'img': []
    },
    {
      'column': '3',
      'img': []
    }
  ];
  public imgName:string = "";
  public currImage:string = "";
  
  constructor(private _ScrollService:ScrollService, private modalService: NgbModal) {
    this.page = 1;
    this.getImages();
  }

  onScrollDown() {
    this.page++;
    this.getImages();
    console.log("scrolled down!!",this.page);
  }

  getImages() {
    console.log("this.page,this.limit",this.page,this.limit);
    
    const ajax = this._ScrollService.getImages(this.page,this.limit);
      ajax.subscribe(
        (response: any) => {
          console.log(response);
          var columnInd = 0;
          for (let i = 0; i < response.length; i++) {
            if(columnInd < 3){
              this.images[columnInd]['img'].push(response[i]);
              columnInd++;
            }else{
              columnInd = 0
              this.images[columnInd]['img'].push(response[i]);
              columnInd++;
            }
          }
          console.log("images",this.images);
          
        },
        (error: any) => {
          console.log(error);          
        }
      );
  }

  open(content:any,imgObj:any) {
		this.modalService.open(content, { size: 'xl' })
    this.imgName = imgObj.author;
    this.currImage = imgObj.download_url+'.webp';
	}

}
