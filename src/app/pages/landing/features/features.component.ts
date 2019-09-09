import { Component, OnInit } from '@angular/core';
import { LandingService } from '../landing.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  public features; 
  constructor(private landingService:LandingService) { }

  ngOnInit() {
    this.features = this.landingService.getFeatures();
  }

}
