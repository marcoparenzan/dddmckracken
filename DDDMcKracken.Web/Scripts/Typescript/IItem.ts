/// <reference path="iidentity.ts" />
interface IItem {
    id: string;
    description: string;
    x: number;
    y: number;
    render(canvas: HTMLDivElement): JQuery;
}