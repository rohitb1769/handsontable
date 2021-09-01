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
    //colHeaders: true,
    viewportColumnRenderingOffset: 27,
    viewportRowRenderingOffset: 'auto',
     colWidths: 150,
    // height: 500,
    // allowInsertColumn: false,
    allowInsertRow: false,
    // allowRemoveColumn: false,
    allowRemoveRow: false,
    autoWrapRow: true,
    autoWrapCol: true,
    bindRowsWithHeaders: true,
    // stretchH: "all",
    width: 3000,
    hiddenColumns: {
      columns: [this.colNames.length-2,this.colNames.length-1],
      indicators: true
    },
    // autoWrapRow: true,
    // maxRows: 22,
    // manualRowResize: true,
    manualColumnResize: true,
    // rowHeaders: true,
    columns: [
      {
      },
      {
        renderer : this.customRenderer
      }
    ],
    colHeaders: this.colNames,
    // manualRowMove: true,
    manualColumnMove: true,
    contextMenu: true,
    // filters: true,
    // dropdownMenu: true
  };

}
