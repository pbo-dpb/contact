import Panel from "./Panel";
export default class Content {
    constructor(payload) {
        this.type = payload.type ? payload.type : 'string';
        this.value = payload.value;
        this.presentation = payload.presentation && payload.presentation !== 'default' ? payload.presentation : null;
        this.panels = (payload.panels ? payload.panels : []).map(element => {
            return new Panel(element);
        });
    }
}