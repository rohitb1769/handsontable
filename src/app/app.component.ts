import { Component } from '@angular/core';
import { SampleJson } from 'src/sampleData/SampleJson';
import { customRenderers } from 'src/util/CustomRenderers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'invisible';
  dataset = SampleJson.dataset;
  customRenderer = customRenderers.customRender;
  colNames = Object.keys(this.dataset[0]);
  tableSettings: any = {
    rowHeaders: false,
    viewportColumnRenderingOffset: 27,
    viewportRowRenderingOffset: 'auto',
    colWidths: this.getColumnWidthStorageValue(),
    allowInsertRow: false,
    allowRemoveRow: false,
    persistentState: true,
    autoWrapRow: true,
    autoWrapCol: true,
    persistentStateSave: function () {
      if (arguments[0] === 'manualColumnMove') {
        window.localStorage.setItem(
          'manualColumnMove',
          JSON.stringify(arguments[1])
        );
      }
      if (arguments[0] === 'manualColumnWidths') {
        window.localStorage.setItem(
          'manualColumnWidths',
          JSON.stringify(
            arguments[1].map((each: any) => (each === null ? 150 : each))
          )
        );
      }
    },
    bindRowsWithHeaders: true,
    width: 3000,
    hiddenColumns: {
      columns: [this.colNames.length - 2, this.colNames.length - 1],
      indicators: true,
    },
    manualColumnResize: true,
    columns: [
      {},
      {
        renderer: this.customRenderer,
      },
    ],
    colHeaders: this.colNames,
    manualColumnMove: this.getColumnValueStorageValue(),
    contextMenu: true,
  };

  getColumnWidthStorageValue() {
    const colWidth = window.localStorage.getItem('manualColumnWidths');
    return colWidth !== null ? JSON.parse(colWidth) : 150;
  }

  getColumnValueStorageValue() {
    const move = window.localStorage.getItem('manualColumnMove');
    return move !== null ? JSON.parse(move) : true;
  }
}
