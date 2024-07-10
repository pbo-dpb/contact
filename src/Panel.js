import Content from "./Content";

export default class Panel {
    constructor(payload) {
        this.title = payload.title;
        this.redirects = payload.redirects ? payload.redirects : null;
        this.contents = payload.contents ? payload.contents.map(element => {
            return new Content(element);
        }) : [];

    }
}