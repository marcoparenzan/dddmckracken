/// <reference path="../typings/jquery/jquery.d.ts" />
class Item implements IItem {

    id: string;
    description: string;
    x: number;
    y: number;
    e: JQuery;

    constructor(id: string, description: string, x: number, y: number) {
        this.id = id;
        this.description = description;
        this.x = x;
        this.y = y;
    }

    render(canvas: HTMLDivElement): JQuery {
        var style: string =
            "position:absolute;left:"
            + (this.x - 10) + "px;"
            + "top:" + (this.y - 10) + "px;width:20px;height:20px;background-color:yellow;";
        this.e = $("<div class='item' data-id='" + this.id + "' title='" + this.description + "' style='" + style + "'></div>");
        $(canvas).append(this.e);
        return this.e;
    }
}