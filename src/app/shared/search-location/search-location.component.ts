import { Component, OnInit,ViewChild,ElementRef,AfterViewInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.scss']
})
export class SearchLocationComponent implements AfterViewInit {
  @ViewChild('mapSearch') searchField!:ElementRef;
  @Output()onLocationChange = new EventEmitter();
  constructor() { }

  ngAfterViewInit(){
    const searchBox = new google.maps.places.SearchBox(
      this.searchField.nativeElement
    );
    
    
    searchBox.addListener('places_changed',()=>{
      const places = searchBox.getPlaces();
      console.log({value:this.searchField.nativeElement.value});
      this.onLocationChange.emit(this.searchField.nativeElement.value);
      if(places?.length===0){
        return;
      }
      const bounds = new google.maps.LatLngBounds();
      places?.forEach(place=>{
        console.log({places});
        if(!place.geometry || !place.geometry.location){
          return;
        }
        
        if(place.geometry.viewport){
          bounds.union(place.geometry.viewport);
        }
        else{
          bounds.extend(place.geometry.location);
        }
      });
      console.log({location:bounds});
    });
  }

}
