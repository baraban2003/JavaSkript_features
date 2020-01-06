class Options {
    constructor(height, width, bg, fontSize, textAlign = 'center') {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        /* метод, создающий новый div на странице, записывающий в него 
        любой текст и при помощи cssText изменять 
        свой стиль из переданных параметров*/
        let element = document.createElement('div');
        document.body.appendChild(element);
        let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
        element.style.cssText = param;
    }
}
let obj = new Options (100, 320, 'green', 14 );
obj.createDiv();