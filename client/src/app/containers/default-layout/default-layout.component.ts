import { Component, OnDestroy, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../../Services/token.service';


@Component({
	selector: 'app-dashboard',
	templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy, OnInit {
	public navItems = navItems;
	public sidebarMinimized = true;
	private changes: MutationObserver;
	public element: HTMLElement;

	public loggedIn;
	constructor(
		private auth: AuthService,
		private router: Router,
		private token: TokenService,
    @Inject(DOCUMENT) _document?: any) {

		this.changes = new MutationObserver((mutations) => {
			this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
		});
		this.element = _document.body;
		this.changes.observe(<Element>this.element, {
			attributes: true,
			attributeFilter: ['class']
		});
	}

	ngOnDestroy(): void {
		this.changes.disconnect();
	}

	ngOnInit() {

		this.auth.authStatus.subscribe(value => this.loggedIn = value);
	}

	logout(event: MouseEvent) {
		event.preventDefault();
		this.token.remove();
		this.auth.changeAuthStatus(true);
		this.router.navigateByUrl('/');
	}
}
