import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UsersService } from '../../../services/users.service';
// import { RandomDataService } from '../../common/random-data.service';

import { IUser, User } from '../IUser';
import { DbUser } from '../../../state/state';


@Component({
  templateUrl: 'user-detail.pug'
})
export class UserDetailComponent implements OnInit {
  user: DbUser;
  errorMessage = 'Some Error';

  constructor(private _route: ActivatedRoute, private userService: UsersService) {}

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    if (id) {
      this.getTheUser(id);
    }
  }

  getTheUser(id: string) {
    if (id) {
       return this.userService.getSingleUser(id).subscribe(user => this.user = user);
    }
  }
}
