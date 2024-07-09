import Content from "./Content";

export default class Panel {
    constructor(payload) {
        this.title = payload.title;
        this.contents = payload.contents.map(element => {
            return new Content(element);
        });
        this.panels = payload.panels.map(element => {
            return new Panel(element);
        });
    }
}