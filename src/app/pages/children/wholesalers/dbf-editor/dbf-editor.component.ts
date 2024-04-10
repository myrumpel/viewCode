import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';

@Component({
  selector: 'app-dbf-editor',
  templateUrl: './dbf-editor.component.html',
  styleUrl: './dbf-editor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DbfEditorComponent {
  data = contentDataRu.wholesalers.dbfEditor;
}
