import Handsontable from "handsontable";
export class ConversionUtil {

    static getArrayNames(jsonArray: any) {
        let ulEle = document.createElement('ul');
        for( let i=0;i<jsonArray.length;i++) {
            let liEle = document.createElement('li');
            liEle.appendChild(document.createTextNode(jsonArray[i].name));
            ulEle.appendChild(liEle);
        }
        return ulEle;
    }

    static getHomepage(homepagetext : string) {
        let aTag = document.createElement('a');
        aTag.href=homepagetext;
        aTag.appendChild(document.createTextNode(homepagetext));
        return aTag;
    }

    static getTextContent(td:any, textContent : string) {
        Handsontable.dom.empty(td);
        td.appendChild(document.createTextNode(textContent));
        return td;
    }


}