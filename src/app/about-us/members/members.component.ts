import { Component, OnInit } from '@angular/core';
import { Members } from '../../shared/models/members.model';
import { MembersService } from './members.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'gp-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  members$: Observable<Members[]>;

  constructor(private membersService: MembersService) {}

  ngOnInit() {
    this.members$ = this.membersService.getAll();
  
  }
}
