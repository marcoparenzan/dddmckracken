/// <reference path="icommandbuilder.ts" />
/// <reference path="commandbuilder.ts" />
var StageBuilder = (function () {
    function StageBuilder() {
        this._actors = {};
        this._items = {};
    }
    StageBuilder.prototype.onCommandComplete = function (handler) {
        this._onCommandComplete = handler;
    };

    StageBuilder.prototype.bindCommands = function (commands) {
        var _this = this;
        commands.click(function (e) {
            var commandName = $(e).attr("data-command-name");
            _this._current_command = _this.createCommandBuilder(commandName);
            _this._current_command.onComplete = _this._onCommandComplete;
        });
    };

    StageBuilder.prototype.bindActors = function (actors) {
        var _this = this;
        actors.each(function (i, e) {
            var actorName = $(e).attr("data-actor-name");
            var actor = _this.createActor(actorName);
            _this._actors[actorName] = actor;
            $(e).click(function (e1) {
                if (_this._current_command === undefined) {
                    return;
                }
                var actorName1 = $(e1).attr("data-actor-name");
                var actor1 = _this._actors[actorName1];
                _this._current_command.handleActor(actor1);
            });
        });
    };

    StageBuilder.prototype.bindItems = function (items) {
        var _this = this;
        items.each(function (i, e) {
            var itemName = $(e).attr("data-item-name");
            var item = _this.createActor(itemName);
            _this._items[itemName] = item;
            $(e).click(function (e1) {
                if (_this._current_command === undefined) {
                    return;
                }
                var itemName1 = $(e1).attr("data-item-name");
                var item1 = _this._items[itemName1];
                _this._current_command.handleActor(item1);
            });
        });
    };

    StageBuilder.prototype.createItem = function (name) {
        return undefined;
    };

    StageBuilder.prototype.getItemByName = function (name) {
        return this._items[name];
    };

    StageBuilder.prototype.createActor = function (name) {
        return undefined;
    };

    StageBuilder.prototype.getActorByName = function (name) {
        return this._actors[name];
    };

    StageBuilder.prototype.createCommandBuilder = function (commandName) {
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
    };
    return StageBuilder;
})();
//# sourceMappingURL=StageBuilder.js.map
