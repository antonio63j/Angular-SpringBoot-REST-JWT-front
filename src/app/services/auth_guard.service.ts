import { Injectable } from '@angular/core';
import { UserInfoService } from './user-info.service';
import { LoginService } from './api/login.service';
import { Router, CanActivate, CanActivateChild,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(
        private router: Router,
        private loginService: LoginService,
        private userInfoService: UserInfoService
    ) { }
// ActivatedRouteSnapshot:
// Contains the information about a route associated with a component loaded in
// an outlet at a particular moment in time. ActivatedRouteSnapshot can also be used to traverse the router state tree.
// RouterStateSnapshot:
// is a tree of activated route snapshots. Every node in this tree knows about
// the "consumed" URL segments, the extracted parameters, and the resolved data.
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        return this.checkLogin(url);
        //return true;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    checkLogin(url: string): boolean {
        if (this.userInfoService.isLoggedIn()) {
            return true;
        }
        console.log("User is not logged - This routing guard prvents redirection to any routes that needs logging.");
        //Store the original url in login service and then redirect to login page
        this.loginService.landingPage = url;
        this.router.navigate(['login',]);
        return false;
    }
}
