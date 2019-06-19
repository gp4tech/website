import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { WebTeamMembersService } from './web-team-members.service';
import { WebTeamMember } from '../shared/models/web-team-member.model';
import { LanguageService } from '../core/language.service';

@Component({
  selector: 'gp-who-did-this',
  templateUrl: './who-did-this.component.html',
  styleUrls: ['./who-did-this.component.scss']
})
export class WhoDidThisComponent implements OnInit {
  webTeamMembers$: Observable<WebTeamMember[]>;
  roles: string[] = ['dev', 'qa', 'po', 'designer'];

  constructor(
    private webTeamMembersService: WebTeamMembersService,
    public language: LanguageService
  ) {}

  ngOnInit() {
    this.webTeamMembers$ = this.webTeamMembersService.getAll();
  }
}
