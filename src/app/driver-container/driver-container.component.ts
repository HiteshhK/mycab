import { Component, OnInit,ViewChild,TemplateRef,AfterViewInit } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-driver-container',
  templateUrl: './driver-container.component.html',
  styleUrls: ['./driver-container.component.scss']
})
export class DriverContainerComponent implements OnInit,AfterViewInit {
  @ViewChild(GoogleMap)map?:GoogleMap;
@ViewChild('myDialog')myDialog= {} as TemplateRef<string>;
  directionsResults:any;
  markerPosition={
    lat:24.6788,
    lng:77.7777
  }
  mapConfig = {
    disableDefaultUI:true,
    fullscreenControl:true,
    zoomControl:true,
    // mapId:'74fc23cb723d7a21'
  }
  ratings = {
    ratingsAvg:4.7,
    totalReviews:20,
  }
  markerOptions: google.maps.MarkerOptions = {draggable: false, 
    icon:{
      url:"./assets/images/cabs/man-svgrepo-com.svg",
    scaledSize: new google.maps.Size(30,30,'px','px'),
    },
    animation: google.maps.Animation.DROP
  };
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    
  }
ngAfterViewInit(): void {
  const hasNotification = localStorage['notification'];
  console.log({hasNotification});
    
  if(hasNotification){
      console.log('open the dialog');
      
      this.dialog.open(this.myDialog,{
        hasBackdrop:false,
        disableClose:true,
      }).afterClosed().subscribe(res=>{
        console.log('closed');
      })
    }
}
}
