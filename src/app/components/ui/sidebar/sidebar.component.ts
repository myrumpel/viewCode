import { Component, Input, input, OnInit } from '@angular/core';
import { pharmaciesLinks } from '../../../data/pharmacies-links';
import { sidebarLinks } from '../../../models/sidebarLinks';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  imports: [RouterLinkActive, NgForOf, RouterLink],
  standalone: true,
})
export class SidebarComponent {
  @Input() items: sidebarLinks[] = [];
}
