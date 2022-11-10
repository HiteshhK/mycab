import { Component,ElementRef,ViewChild,AfterViewInit } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import {MatDialog} from '@angular/material/dialog';
import { CabBookingModalComponent } from '../components/cab-booking-modal/cab-booking-modal.component';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements AfterViewInit{
  @ViewChild(GoogleMap)map?:GoogleMap;
  showSideNav=false;
  geocoder = new google.maps.Geocoder();
  directionService = new google.maps.DirectionsService();
  directionRenderer = new google.maps.DirectionsRenderer();
  distanceMatrixService = new google.maps.DistanceMatrixService();
  coords = {
    lat:28.687924, lng:77.480806
  }
  mapConfig = {
    disableDefaultUI:true,
    fullscreenControl:true,
    zoomControl:true,
    // mapId:'74fc23cb723d7a21'
  }
  markerPosition: google.maps.LatLngLiteral =this.coords;
  markerOptions: google.maps.MarkerOptions = {draggable: false, 
    icon:{
      url:"./assets/images/cabs/man-svgrepo-com.svg",
    scaledSize: new google.maps.Size(30,30,'px','px'),
    },
    animation: google.maps.Animation.DROP
  };

  mockCabData=[
    {coords:{
      lat:28.686413,lng: 77.483048
    },
    options:{draggable: false, 
      icon:{
        url:"./assets/images/cabs/car-svgrepo-com.svg",
      scaledSize: new google.maps.Size(30,30,'px','px'),
      },
      animation: google.maps.Animation.DROP
    }
  }
  ,
  {coords:{
    lat:28.694394,lng: 77.481632
  },
  options:{draggable: false, 
    icon:{
      url:"./assets/images/cabs/car-svgrepo-com.svg",
    scaledSize: new google.maps.Size(30,30,'px','px'),
    },
    animation: google.maps.Animation.DROP
  }
},
{coords:{
  lat:28.677678,lng:77.476868
},
options:{draggable: false, 
  icon:{
    url:"./assets/images/cabs/car-svgrepo-com.svg",
  scaledSize: new google.maps.Size(30,30,'px','px'),
  },
  animation: google.maps.Animation.DROP
}
},
{coords:{
  lat:28.695034, lng:77.485752
},
options:{draggable: false, 
  icon:{
    url:"./assets/images/cabs/car-svgrepo-com.svg",
  scaledSize: new google.maps.Size(30,30,'px','px'),
  },
  animation: google.maps.Animation.DROP
}
},
{coords:{
  lat:28.694318,lng: 77.461891
},
options:{draggable: false, 
  icon:{
    url:"./assets/images/cabs/car-svgrepo-com.svg",
  scaledSize: new google.maps.Size(30,30,'px','px'),
  },
  animation: google.maps.Animation.DROP
}
},
{coords:{
  lat:0,lng:0
  // lat:28.695461, lng:77.492132
},
options:{draggable: false, 
  icon:{
    url:"./assets/images/cabs/car-svgrepo-com.svg",
  scaledSize: new google.maps.Size(30,30,'px','px'),
  },
  animation: google.maps.Animation.DROP
}
}
  ]
  constructor(public dialog: MatDialog) {
    navigator.geolocation.getCurrentPosition((pos)=>{
      this.coords.lat = pos.coords.latitude;
      this.coords.lng = pos.coords.longitude;
      this.markerPosition=this.coords;
    });
  }
  ngAfterViewInit():void{
  }
  directionsResults:any;
  openDialog(sidenav:any) {
    const dialogRef = this.dialog.open(CabBookingModalComponent,{
      hasBackdrop:false,
      panelClass:'book-cab-modal',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        // this.map.controls.
        this.markerPosition ={lat:0,lng:0};
        sidenav.toggle();
        this.showSideNav=false;
        this.directionsResults = result;
        console.log({directionsResults:this.directionsResults});
      }
    });
  }
}
