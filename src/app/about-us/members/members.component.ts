import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { MembersService } from './members.service';
import { Member } from '../../shared/models/member.model';
import { LanguageService } from '../../layout/navbar/language-button/language.service';

@Component({
  selector: 'gp-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  members$: Observable<Member[]>;

  constructor(
    public language: LanguageService,
    private membersService: MembersService
  ) {}

  ngOnInit() {
    this.members$ = this.membersService.getAllMembers();
  }
}
