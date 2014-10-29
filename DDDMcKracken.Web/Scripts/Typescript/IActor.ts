/// <reference path="iidentity.ts" />
interface IActor {
    id: string;
    description: string;
    x: number;
    y: number;
    render(canvas: HTMLDivElement): JQuery;
    bindEvents(hub: any): void;
}