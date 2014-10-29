/// <reference path="icommandbuilder.ts" />
/// <reference path="commandbuilder.ts" />

class StageBuilder {

    _actors: IActors;
    _items: IItems;
    _current_command: ICommandBuilder;

    constructor() {
        this._actors = {
        };
        this._items = {
        };
    }

    _onCommandComplete: (commandBuilder: ICommandBuilder) => void;

    onCommandComplete(handler: (commandBuilder:ICommandBuilder) => void):void {
        this._onCommandComplete = handler;
    }

    render(script: StageScript, canvas: HTMLDivElement, hubClient:any): void {
        script.Actors.forEach((actor: ActorScript): void => {
            var a: IActor = this.createActor(actor.Id, actor.Description, actor.X, actor.Y);
            a.bindEvents(hubClient);
            this._actors[a.id] = a;
            a.render(canvas).click((e1: Event): void => {
                if (this._current_command === undefined) {
                    return;
                }
                var id: string = $(e1.currentTarget).attr("data-id");
                var actor1: IActor = this._actors[id];
                this._current_command.handleActor(actor1);
            });
        });
        script.Items.forEach((item: ItemScript): void => {
            var i: IItem = this.createItem(item.Id, item.Description, item.X, item.Y);
            this._items[i.id] = i;
            i.render(canvas).click((e1: Event): void => {
                if (this._current_command === undefined) {
                    return;
                }
                var id: string = $(e1.currentTarget).attr("data-id");
                var item1: IItem = this._items[id];
                this._current_command.handleItem(item1);
            });
        });
    }

    bindCommands(commands: JQuery): void {
        commands.click((e: Event): void => {
            var commandName: string = $(e.currentTarget).attr("data-command-name");
            this._current_command = this.createCommandBuilder(commandName);
            this._current_command.onComplete = this._onCommandComplete;
        });
    }

    createItem(id: string, description: string, x: number, y: number): IItem {
        return new Item(id, description, x, y);
    }

    getItemByName(name: string): IItem {
        return this._items[name];
    }

    createActor(id: string, description: string, x: number, y: number): IActor {
        return new Actor(id, description, x, y);
    }

    getActorByName(name: string): IActor {
        return this._actors[name];
    }

    createCommandBuilder(commandName: string): ICommandBuilder {
        switch (commandName) {
            case "Push":
                return new PushCommandBuilder();
            case "Pull":
                return new PullCommandBuilder();
            case "Give":
                return new GiveCommandBuilder();
            case "Open":
                return new OpenCommandBuilder();
            case "Close":
                return new CloseCommandBuilder();
            case "Read":
                return new ReadCommandBuilder();
            case "WalkTo":
                return new WalkToCommandBuilder();
            case "PickUp":
                return new PickUpCommandBuilder();
            case "WhatIs":
                return new WhatIsCommandBuilder();
            case "PutOn":
                return new PutOnCommandBuilder();
            case "TakeOff":
                return new TakeOffCommandBuilder();
            case "Use":
                return new UseCommandBuilder();
            case "TurnOn":
                return new TurnOnCommandBuilder();
            case "TurnOff":
                return new TurnOffCommandBuilder();
            default:
                throw Error("Command not supported");
        }
    }
}