import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  benefits: any = [
    'Ability to scale using Dexter, our AI-powered marketing genius.',
    'Client Success Manager who will optimize your Facebook ad campaigns and focus on driving the best possible results for you.',
    'This is a limited time offer only.'
  ]
   reviews: any = [
     {
      title: '"It surpassed our expectations"',
      message: '"Filed has completely surpassed our expectations. I will refer everyone I know. Filed is worth much more than I paid."',
      name: 'Tania Y.',
      position: 'Flexi Content @Hello',
      image: '/assets/pexels-christina-morillo-1181690.jpg'
     },
     {
      title: '“The essential marketing tool”',
      message: '“Filed is the most valuable business resource we have EVER purchased. I was amazed at the quality of filed. We were treated like royalty.”',
      name: 'Jack Francis',
      position: 'Manager @ Accidents Direct',
      image: '/assets/pexels-italo-melo-2379004.jpg'
     },
     {
      title: '“Your company is truly upstanding”',
      message: '“The service was excellent. After using filed my business skyrocketed! It really saves me time and effort.”',
      name: 'Dawna N.',
      position: 'Editor @ Museum of Typography',
      image: '/assets/pexels-kebs-visuals-3992656.jpg'
     },
   ]
}
