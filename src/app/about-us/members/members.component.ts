import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { MembersService } from './members.service';
import { Member } from '../../shared/models/member.model';
import { LanguageService } from '../../core/language.service';

@Component({
  selector: 'gp-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {
  members$: Observable<Member[]>;
  selectedMemberId: string = null;

  constructor(
    public language: LanguageService,
    private membersService: MembersService,
  ) {}

  ngOnInit() {
    this.members$ = this.membersService.getAllMembers();
  }

  openMemberInfo(memberInfo) {
    if (memberInfo.id === this.selectedMemberId) {
      this.selectedMemberId = null;
      return;
    }

    this.selectedMemberId = memberInfo.id;
  }
}
