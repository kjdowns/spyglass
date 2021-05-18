import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  IMAGES = [
    {value: "anniversary", image: "./assets/images/anniversary.png"},
    {value: "appliance", image: "./assets/images/appliance.png"},
    {value: "car", image: "./assets/images/car.png"},
    {value: "electronics", image: "./assets/images/electronics.png"},
    {value: "entertainment", image: "./assets/images/entertainment.png"},
    {value: "event", image: "./assets/images/event.png"},
    {value: "generic", image: "./assets/images/generic.png"},
    {value: "gift", image: "./assets/images/gift.png"},
    {value: "house", image: "./assets/images/house.png"},
    {value: "travel", image: "./assets/images/travel.png"}
  ]

  constructor() { }

  getAll(): any {
    return this.IMAGES;
  }

}
