import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.router.navigate(['search', form.value.search]);
  }
}
