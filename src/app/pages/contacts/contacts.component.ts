import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { contentDataRu } from '../../data/pages/contentData';
import {fadeAnimation} from "../../animations/fade.adnimation";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
  animations: [fadeAnimation],
  changeDetection: ChangeDetectionStrategy['OnPush'],
})
export class ContactsComponent {
  data = contentDataRu.contacts;
}
