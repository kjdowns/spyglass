import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  IMAGES = [
    {value: "Romance", image: "./assets/images/anniversary.png"},
    {value: "Appliance", image: "./assets/images/appliance.png"},
    {value: "Car", image: "./assets/images/car.png"},
    {value: "Electronics", image: "./assets/images/electronics.png"},
    {value: "Entertainment", image: "./assets/images/entertainment.png"},
    {value: "Event", image: "./assets/images/event.png"},
    {value: "Generic", image: "./assets/images/generic.png"},
    {value: "Gift", image: "./assets/images/gift.png"},
    {value: "House", image: "./assets/images/house.png"},
    {value: "Travel", image: "./assets/images/travel.png"}
  ]

  constructor() { }

  getAll(): any {
    return this.IMAGES;
  }

}
