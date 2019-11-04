import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {
  pages=[
    {
      title:'alumno',
      url:'/menu/alumno',
    }
  ];
  selectPath = '';
  constructor(private router: Router) { 
    this.router.events.subscribe((event: RouterEvent) => {
    this.selectPath = event.url;
   
  });
  }
  ngOnInit() {
  }

}
