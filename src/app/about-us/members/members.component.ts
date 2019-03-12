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
      mainCareer: 'about-us.members.career.informatics',
      currentOcupation: 'about-us.members.ocupation.dev',
      positionGP4: 'about-us.members.position.web',
      image: '../../assets/images/GP4Tech-logo.png'
    },
    {
      name: 'Claudia Martinez',
      mainCareer: 'about-us.members.career.electronics',
      currentOcupation: 'about-us.members.ocupation.dev',
      positionGP4: 'about-us.members.position.web',
      image: '../../assets/images/GP4Tech-logo.png'
    },
    {
      name: 'Claudia Martinez',
      mainCareer: 'about-us.members.career.informatics',
      currentOcupation: 'about-us.members.ocupation.qa',
      positionGP4: 'about-us.members.position.web',
      image: '../../assets/images/GP4Tech-logo.png'
    },
    {
      name: 'Claudia Martinez',
      mainCareer: 'about-us.members.career.electronics',
      currentOcupation: 'about-us.members.ocupation.qa',
      positionGP4: 'about-us.members.position.web',
      image: '../../assets/images/GP4Tech-logo.png'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
