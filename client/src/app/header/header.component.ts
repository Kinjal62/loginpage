import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from "@angular/router";
import * as _ from 'lodash';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	key;
	users : any;
	_id: any;
	myFriend=[];
	constructor(public _userService: UserService, public router: Router) { }

	ngOnInit() {
		
	}
	onLogout(){
		this._userService.deleteToken();
		this.router.navigate(['/login']);
	}
	searchUser(){
  	console.log(this.key);
  	this.router.navigate(['/search', this.key]);
  	}
	
}
