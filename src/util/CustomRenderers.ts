import Handsontable from "handsontable";
import { ConversionUtil } from "./ConversionUtil";

export class customRenderers {
    static customRender = function (instance:any, td:any, row:any, col:any, prop:any, value:any, cellProperties:any) {
        let ele = null;
        switch (prop) {
          case "homepage" : ele = ConversionUtil.getHomepage(value);
                          break;
          case "genres" : 
          case "keywords" :
          case "production_companies" : 
          case "production_countries" : 
          case "spoken_languages" : ele = ConversionUtil.getArrayNames(value);
                                    break;
          default : td = ConversionUtil.getTextContent(td,value);
        }
        if(ele) {
          Handsontable.dom.addEvent(ele, 'mousedown', event => {
            event.preventDefault();
          });
          Handsontable.dom.empty(td);
          td.appendChild(ele);
        }
    
        return td;
      }
}