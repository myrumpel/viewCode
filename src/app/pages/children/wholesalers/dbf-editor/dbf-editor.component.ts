import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';
import {fadeAnimation} from "../../../../animations/fade.adnimation";

@Component({
  selector: 'app-dbf-editor',
  templateUrl: './dbf-editor.component.html',
  styleUrl: './dbf-editor.component.scss',
  animations: [fadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DbfEditorComponent {
  data = contentDataRu.wholesalers.dbfEditor;
}
