class Actor implements IActor {

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
            + "top:" + (this.y - 139) + "px;";
        this.e = $("<div class='actor ddd' data-id='" + this.id + "' title='" + this.description + "' style='" + style + "'></div>");
        $(canvas).append(this.e);
        return this.e;
    }

    bindEvents(hub_client: any): void {
        hub_client.ddd = this;
        hub_client.ddd_moved = (x: number, y: number):void => {
            hub_client.ddd.e.css("left", x);
            hub_client.ddd.e.css("top", y - 139);
        };
    }
}