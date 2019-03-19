import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gp-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  members = [
    {
      name: 'Claudia Martinez',
      mainCareer: 'informatics',
      currentOcupation: 'dev',
      positionGP4: 'web',
      image: '../../assets/images/GP4Tech-logo.png'
    },
    {
      name: 'Claudia Martinez',
      mainCareer: 'electronics',
      currentOcupation: 'dev',
      positionGP4: 'web',
      image: '../../assets/images/GP4Tech-logo.png'
    },
    {
      name: 'Claudia Martinez',
      mainCareer: 'informatics',
      currentOcupation: 'qa',
      positionGP4: 'web',
      image: '../../assets/images/GP4Tech-logo.png'
    },
    {
      name: 'Claudia Martinez',
      mainCareer: 'electronics',
      currentOcupation: 'qa',
      positionGP4: 'web',
      image: '../../assets/images/GP4Tech-logo.png'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
