/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="istagebuilder.ts" />
/// <reference path="icommandbuilder.ts" />
/// <reference path="icommand.ts" />
/// <reference path="iitem.ts" />

class CommandBuilder implements ICommandBuilder {

    _commandName: string;

    constructor(name: string) {
        this._commandName = name;
    }

    isComplete(): boolean {
        return true;
    }

    onComplete: (commandBuilder: ICommandBuilder) => void;

    prepareCommand(): ICommand {
        return {
            name: this._commandName
        };
    }

    handleItem(item: IItem): boolean {
        if (this.onComplete !== undefined) {
            this.onComplete(this);
            return true;
        }
        return false;
    }

    handleActor(actor: IActor): boolean {
        if (this.onComplete !== undefined) {
            this.onComplete(this);
            return true;
        }
        return false;
    }

    run(): void {
    }
}

class CommandBuilderWithItem extends CommandBuilder {
    _item: IItem;

    constructor(name: string) {
        super(name);
    }

    handleItem(item: IItem): boolean {
        this._item = item;
        if (this.isComplete()) {
            return super.handleItem(item);
        }
        return true;
    }

    isComplete(): boolean {
        if (this._item === undefined) {
            return false;
        }
        return super.isComplete();
    }

    prepareCommand(): ICommand {
        var command: ICommand = super.prepareCommand();
        command["itemId"] = this._item.id;
        return command;
    }
}

class CommandBuilderWithActor extends CommandBuilder {
    _actor: IActor;

    constructor(name: string) {
        super(name);
    }

    handleActor(actor: IActor): boolean {
        this._actor = actor;
        if (this.isComplete()) {
            return super.handleActor(actor);
        }
        return true;
    }

    isComplete(): boolean {
        if (this._actor === undefined) {
            return false;
        }
        return super.isComplete();
    }

    prepareCommand(): ICommand {
        var command: ICommand = super.prepareCommand();
        command["actorId"] = this._actor.id;
        return command;
    }
}

class CommandBuilderWithItemAndActor extends CommandBuilderWithItem {
    _actor: IActor;

    constructor(name: string) {
        super(name);
    }

    handleActor(actor: IActor): boolean {
        if (this.isComplete()) {
            return super.handleActor(actor);
        }
        this._actor = actor;
        return true;
    }

    isComplete(): boolean {
        if (this._actor === undefined) {
            return false;
        }
        return super.isComplete();
    }

    prepareCommand(): ICommand {
        var command: ICommand = super.prepareCommand();
        command["actorId"] = this._actor.id;
        return command;
    }
}

class PushCommandBuilder extends CommandBuilderWithItem {
    constructor() {
        super("Push");
    }
}

class PullCommandBuilder extends CommandBuilderWithItem {
    constructor() {
        super("Pull");
    }
}

class GiveCommandBuilder extends CommandBuilderWithItemAndActor {
    constructor() {
        super("Give");
    }
}

class OpenCommandBuilder extends CommandBuilderWithItem {
    constructor() {
        super("Open");
    }
}

class CloseCommandBuilder extends CommandBuilderWithItem {
    constructor() {
        super("Close");
    }
}

class ReadCommandBuilder extends CommandBuilderWithItem {
    constructor() {
        super("Read");
    }
}

class WalkToCommandBuilder extends CommandBuilderWithItem {
    constructor() {
        super("WalkTo");
    }
}

class PickUpCommandBuilder extends CommandBuilderWithItem {
    constructor() {
        super("PickUp");
    }
}

class WhatIsCommandBuilder extends CommandBuilderWithItem {
    constructor() {
        super("WhatIs");
    }
}

class PutOnCommandBuilder extends CommandBuilderWithItem {
    constructor() {
        super("PutOn");
    }
}

class TakeOffCommandBuilder extends CommandBuilderWithItem {
    constructor() {
        super("TakeOff");
    }
}

class UseCommandBuilder extends CommandBuilderWithItem {
    constructor() {
        super("Use");
    }
}

class TurnOnCommandBuilder extends CommandBuilderWithItem {
    constructor() {
        super("TurnOn");
    }
}

class TurnOffCommandBuilder extends CommandBuilderWithItem {
    constructor() {
        super("TurnOff");
    }
}