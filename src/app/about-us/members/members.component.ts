import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Member } from '../../shared/models/member.model';
import { MembersService } from './members.service';

@Component({
  selector: 'gp-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  members$: Observable<Member[]>;
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

  constructor(private membersService: MembersService) {}

  ngOnInit() {
    this.members$ = this.membersService.getAll();
  }
}
