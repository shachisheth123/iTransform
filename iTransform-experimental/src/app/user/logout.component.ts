import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component( {
    templateUrl : './logout.component.html'
})
export class LogoutComponent implements OnInit {
    constructor(private router: Router) {}
    ngOnInit(): void {
        this.router.navigate(['/login']);
        window.location.href = '/login';
    }
}