import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';

enum DRIVER_AVAILABLITY_STATUS{
  DRIVER_AVAILABLITY_STATUS_NOT_AVAILABLE=0,
  DRIVER_AVAILABLITY_STATUS_AVAILABLE=1,
  DRIVER_AVAILABLITY_STATUS_LUNCH_BREAK
}
interface DriverDetails{
  driverName:string,
  gender:'M'|'F'|'T',
  license:string,
  vehicleNo:string,
  rating:{
    ratingsAvg:number,
    totalReviews:number,
  }
  restrictedArea:string[],
  availablityStatus:DRIVER_AVAILABLITY_STATUS,
  profilePhoto:string,
  chargesPerKm:number
}

const DETAILS:DriverDetails = {
  driverName:"Sonu kumar",
  gender:"M",
  license:"abcd1221",
  vehicleNo:"HR26 BC 1010",
  rating:{
    ratingsAvg:4.7,
    totalReviews:20,
  },
  restrictedArea:["GZB","Meerut","Faridabad"],
  availablityStatus:DRIVER_AVAILABLITY_STATUS.DRIVER_AVAILABLITY_STATUS_AVAILABLE,
  profilePhoto:"driver.jpg",
  chargesPerKm:10
}
@Component({
  selector: 'app-available-cabs',
  templateUrl: './available-cabs.component.html',
  styleUrls: ['./available-cabs.component.scss']
})
export class AvailableCabsComponent implements OnInit {
  @Input('driver-details')details:DriverDetails = DETAILS;
@Output()onCabClick=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  showDriverDetail(){
    this.onCabClick.emit();
  }
}
