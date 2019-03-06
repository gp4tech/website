import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  members = [
    {
      name: 'Claudia Martinez',
      career: 'Electronics Engineer',
      currentOcupation: 'Software Developer',
      position: 'Web team de GP4Tech',
      image: '../../assets/images/GP4Tech-logo.png'
    },
    {
      name: 'Claudia Martinez',
      career: 'Electronics Engineer',
      currentOcupation: 'Software Developer',
      position: 'Web team de GP4Tech',
      image: '../../assets/images/GP4Tech-logo.png'
    },
    {
      name: 'Claudia Martinez',
      career: 'Electronics Engineer',
      currentOcupation: 'Software Developer',
      position: 'Web team de GP4Tech',
      image: '../../assets/images/GP4Tech-logo.png'
    },
    {
      name: 'Claudia Martinez',
      career: 'Electronics Engineer',
      currentOcupation: 'Software Developer',
      position: 'Web team de GP4Tech',
      image: '../../assets/images/GP4Tech-logo.png'
    }
  ];
  socialLinks = [
    {
      faIcon: 'fa-linkedin'
    },
    {
      faIcon: 'fa-twitter'
    },
    {
      faIcon: 'fa-facebook'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
