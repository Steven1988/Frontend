import { Component, OnInit } from '@angular/core';
// import { UsersService } from './users.service';

// import { IUser, User } from './IUser';
import { UsersService } from '../../services/users.service';

@Component({
  templateUrl: 'users.pug',
  styles: ['h3.headTitle { margin-top: 5px;}']
})
export class UsersComponent implements OnInit {
  users: any;
  // fullname: string = this.fullname;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
    // this.usersService.getUsers().subscribe(users => this.users = users);
    // console.log(this.users);
    // this.getRandomData();
  }

  getUsers() {
    return this.usersService.getUsers().subscribe(users => (this.users = users));

    // console.log(this.users);
  }

  getRandomData() {
    return this.usersService.getUsers().subscribe(users => (this.users = users));
    // return this.rds.getRandomData().subscribe(users => this.users = users)

    // this.user.fullname = this.users.id.values
    // console.log(this.users);

    // );
    // console.log(this.users)

    // return result;
  }
}
