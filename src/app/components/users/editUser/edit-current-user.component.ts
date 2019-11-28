import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    templateUrl: 'edit-current-user.pug',
})

export class EditCurrentUserComponent implements OnInit {
    editProfileForm = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
        male: new FormControl(''),
        female: new FormControl(''),
        city: new FormControl('')
    });

    constructor(private _route: ActivatedRoute) {}

    ngOnInit(): void {
        const id = this._route.snapshot.paramMap.get('id');
    }

    saveProfile(): void {
        console.log('saves the user profile');
    }
}
