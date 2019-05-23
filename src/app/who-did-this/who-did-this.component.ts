import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { LanguageService } from '../layout/navbar/language-button/language.service';
import { WebTeamMembersService } from './web-team-members.service';
import { WebTeamMembers } from '../shared/models/web-team-members.model';

@Component({
  selector: 'gp-who-did-this',
  templateUrl: './who-did-this.component.html',
  styleUrls: ['./who-did-this.component.scss']
})
export class WhoDidThisComponent implements OnInit {
  webTeamMembers$: Observable<WebTeamMembers[]>;
  teams: string[] = ['dev', 'qa', 'po', 'designers'];

  constructor(private webTeamMembersService: WebTeamMembersService,
              public language: LanguageService) {}

  ngOnInit() {
    this.webTeamMembers$ = this.webTeamMembersService.getAll();
  }
}
