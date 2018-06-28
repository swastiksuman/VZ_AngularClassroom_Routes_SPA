import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

/*
    In angular 5, new guards added
    GuardCheckStart
    ChildActivatorStart
    ActivationStart
    GuardCheckEnd
    ResolveStart
    ActivateEnd
    ChildActivateEnd

*/

export class AlwaysAuthGuard implements CanActivate {

    canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean{
        console.log('I am always auth guard' + state);
        /* if(Session.isAuthenticated == true){
            this._router.navigate('contacts');
        } */
        return true;
    }
}
