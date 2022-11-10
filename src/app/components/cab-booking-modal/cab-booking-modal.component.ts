import { Component, OnInit,Optional,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-cab-booking-modal',
  templateUrl: './cab-booking-modal.component.html',
  styleUrls: ['./cab-booking-modal.component.scss']
})
export class CabBookingModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CabBookingModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }
  origin!:any;
  destination!:any;
  getLocation(event:any,type:'start'|'end'){
    if(type=='start'){
      this.origin = event;
    }else{
      this.destination = event;
    }
  }

  getDirection(){
  const directionService = new google.maps.DirectionsService();
    const request = {
      origin:this.origin,
      destination:this.destination,
      travelMode:google.maps.TravelMode.DRIVING,
      unitSystem:google.maps.UnitSystem.IMPERIAL
    };
    const notification = [{
      cordinates:{origin:this.origin,destination:this.destination},
      bookNow:true
    }]
    localStorage['notification'] =notification;
    directionService.route(request,(result,status)=>{
      this.dialogRef.close(result);
    });
  }
}
