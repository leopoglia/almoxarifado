import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
@Injectable()
class CheckLogged implements CanActivate {
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {

        let usuario = localStorage.getItem('usuario');
        let senha = localStorage.getItem('senha');

        if (usuario == "" && senha == "") {
            this.router.navigate(['/']);
            return false;
        } else {
            return true;
        }
    }
}

export default CheckLogged;