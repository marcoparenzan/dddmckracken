var Actor = (function () {
    function Actor(id, description, x, y) {
        this.id = id;
        this.description = description;
        this.x = x;
        this.y = y;
    }
    Actor.prototype.render = function (canvas) {
        var style = "position:absolute;left:" + (this.x - 10) + "px;" + "top:" + (this.y - 139) + "px;";
        this.e = $("<div class='actor ddd' data-id='" + this.id + "' title='" + this.description + "' style='" + style + "'></div>");
        $(canvas).append(this.e);
        return this.e;
    };

    Actor.prototype.bindEvents = function (hub_client) {
        hub_client.ddd = this;
        hub_client.ddd_moved = function (x, y) {
            hub_client.ddd.e.css("left", x);
            hub_client.ddd.e.css("top", y - 139);
        };
    };
    return Actor;
})();
/// <reference path="iidentity.ts" />
/// <reference path="iitem.ts" />
/// <reference path="icommandbuilder.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="istagebuilder.ts" />
/// <reference path="icommandbuilder.ts" />
/// <reference path="icommand.ts" />
/// <reference path="iitem.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var CommandBuilder = (function () {
    function CommandBuilder(name) {
        this._commandName = name;
    }
    CommandBuilder.prototype.isComplete = function () {
        return true;
    };

    CommandBuilder.prototype.prepareCommand = function () {
        return {
            name: this._commandName
        };
    };

    CommandBuilder.prototype.handleItem = function (item) {
        if (this.onComplete !== undefined) {
            this.onComplete(this);
            return true;
        }
        return false;
    };

    CommandBuilder.prototype.handleActor = function (actor) {
        if (this.onComplete !== undefined) {
            this.onComplete(this);
            return true;
        }
        return false;
    };

    CommandBuilder.prototype.run = function () {
    };
    return CommandBuilder;
})();

var CommandBuilderWithItem = (function (_super) {
    __extends(CommandBuilderWithItem, _super);
    function CommandBuilderWithItem(name) {
        _super.call(this, name);
    }
    CommandBuilderWithItem.prototype.handleItem = function (item) {
        this._item = item;
        if (this.isComplete()) {
            return _super.prototype.handleItem.call(this, item);
        }
        return true;
    };

    CommandBuilderWithItem.prototype.isComplete = function () {
        if (this._item === undefined) {
            return false;
        }
        return _super.prototype.isComplete.call(this);
    };

    CommandBuilderWithItem.prototype.prepareCommand = function () {
        var command = _super.prototype.prepareCommand.call(this);
        command["itemId"] = this._item.id;
        return command;
    };
    return CommandBuilderWithItem;
})(CommandBuilder);

var CommandBuilderWithActor = (function (_super) {
    __extends(CommandBuilderWithActor, _super);
    function CommandBuilderWithActor(name) {
        _super.call(this, name);
    }
    CommandBuilderWithActor.prototype.handleActor = function (actor) {
        this._actor = actor;
        if (this.isComplete()) {
            return _super.prototype.handleActor.call(this, actor);
        }
        return true;
    };

    CommandBuilderWithActor.prototype.isComplete = function () {
        if (this._actor === undefined) {
            return false;
        }
        return _super.prototype.isComplete.call(this);
    };

    CommandBuilderWithActor.prototype.prepareCommand = function () {
        var command = _super.prototype.prepareCommand.call(this);
        command["actorId"] = this._actor.id;
        return command;
    };
    return CommandBuilderWithActor;
})(CommandBuilder);

var CommandBuilderWithItemAndActor = (function (_super) {
    __extends(CommandBuilderWithItemAndActor, _super);
    function CommandBuilderWithItemAndActor(name) {
        _super.call(this, name);
    }
    CommandBuilderWithItemAndActor.prototype.handleActor = function (actor) {
        if (this.isComplete()) {
            return _super.prototype.handleActor.call(this, actor);
        }
        this._actor = actor;
        return true;
    };

    CommandBuilderWithItemAndActor.prototype.isComplete = function () {
        if (this._actor === undefined) {
            return false;
        }
        return _super.prototype.isComplete.call(this);
    };

    CommandBuilderWithItemAndActor.prototype.prepareCommand = function () {
        var command = _super.prototype.prepareCommand.call(this);
        command["actorId"] = this._actor.id;
        return command;
    };
    return CommandBuilderWithItemAndActor;
})(CommandBuilderWithItem);

var PushCommandBuilder = (function (_super) {
    __extends(PushCommandBuilder, _super);
    function PushCommandBuilder() {
        _super.call(this, "Push");
    }
    return PushCommandBuilder;
})(CommandBuilderWithItem);

var PullCommandBuilder = (function (_super) {
    __extends(PullCommandBuilder, _super);
    function PullCommandBuilder() {
        _super.call(this, "Pull");
    }
    return PullCommandBuilder;
})(CommandBuilderWithItem);

var GiveCommandBuilder = (function (_super) {
    __extends(GiveCommandBuilder, _super);
    function GiveCommandBuilder() {
        _super.call(this, "Give");
    }
    return GiveCommandBuilder;
})(CommandBuilderWithItemAndActor);

var OpenCommandBuilder = (function (_super) {
    __extends(OpenCommandBuilder, _super);
    function OpenCommandBuilder() {
        _super.call(this, "Open");
    }
    return OpenCommandBuilder;
})(CommandBuilderWithItem);

var CloseCommandBuilder = (function (_super) {
    __extends(CloseCommandBuilder, _super);
    function CloseCommandBuilder() {
        _super.call(this, "Close");
    }
    return CloseCommandBuilder;
})(CommandBuilderWithItem);

var ReadCommandBuilder = (function (_super) {
    __extends(ReadCommandBuilder, _super);
    function ReadCommandBuilder() {
        _super.call(this, "Read");
    }
    return ReadCommandBuilder;
})(CommandBuilderWithItem);

var WalkToCommandBuilder = (function (_super) {
    __extends(WalkToCommandBuilder, _super);
    function WalkToCommandBuilder() {
        _super.call(this, "WalkTo");
    }
    return WalkToCommandBuilder;
})(CommandBuilderWithItem);

var PickUpCommandBuilder = (function (_super) {
    __extends(PickUpCommandBuilder, _super);
    function PickUpCommandBuilder() {
        _super.call(this, "PickUp");
    }
    return PickUpCommandBuilder;
})(CommandBuilderWithItem);

var WhatIsCommandBuilder = (function (_super) {
    __extends(WhatIsCommandBuilder, _super);
    function WhatIsCommandBuilder() {
        _super.call(this, "WhatIs");
    }
    return WhatIsCommandBuilder;
})(CommandBuilderWithItem);

var PutOnCommandBuilder = (function (_super) {
    __extends(PutOnCommandBuilder, _super);
    function PutOnCommandBuilder() {
        _super.call(this, "PutOn");
    }
    return PutOnCommandBuilder;
})(CommandBuilderWithItem);

var TakeOffCommandBuilder = (function (_super) {
    __extends(TakeOffCommandBuilder, _super);
    function TakeOffCommandBuilder() {
        _super.call(this, "TakeOff");
    }
    return TakeOffCommandBuilder;
})(CommandBuilderWithItem);

var UseCommandBuilder = (function (_super) {
    __extends(UseCommandBuilder, _super);
    function UseCommandBuilder() {
        _super.call(this, "Use");
    }
    return UseCommandBuilder;
})(CommandBuilderWithItem);

var TurnOnCommandBuilder = (function (_super) {
    __extends(TurnOnCommandBuilder, _super);
    function TurnOnCommandBuilder() {
        _super.call(this, "TurnOn");
    }
    return TurnOnCommandBuilder;
})(CommandBuilderWithItem);

var TurnOffCommandBuilder = (function (_super) {
    __extends(TurnOffCommandBuilder, _super);
    function TurnOffCommandBuilder() {
        _super.call(this, "TurnOff");
    }
    return TurnOffCommandBuilder;
})(CommandBuilderWithItem);
/// <reference path="iidentity.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
var Item = (function () {
    function Item(id, description, x, y) {
        this.id = id;
        this.description = description;
        this.x = x;
        this.y = y;
    }
    Item.prototype.render = function (canvas) {
        var style = "position:absolute;left:" + (this.x - 10) + "px;" + "top:" + (this.y - 10) + "px;width:20px;height:20px;background-color:yellow;";
        this.e = $("<div class='item' data-id='" + this.id + "' title='" + this.description + "' style='" + style + "'></div>");
        $(canvas).append(this.e);
        return this.e;
    };
    return Item;
})();
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

    StageBuilder.prototype.render = function (script, canvas, hubClient) {
        var _this = this;
        script.Actors.forEach(function (actor) {
            var a = _this.createActor(actor.Id, actor.Description, actor.X, actor.Y);
            a.bindEvents(hubClient);
            _this._actors[a.id] = a;
            a.render(canvas).click(function (e1) {
                if (_this._current_command === undefined) {
                    return;
                }
                var id = $(e1.currentTarget).attr("data-id");
                var actor1 = _this._actors[id];
                _this._current_command.handleActor(actor1);
            });
        });
        script.Items.forEach(function (item) {
            var i = _this.createItem(item.Id, item.Description, item.X, item.Y);
            _this._items[i.id] = i;
            i.render(canvas).click(function (e1) {
                if (_this._current_command === undefined) {
                    return;
                }
                var id = $(e1.currentTarget).attr("data-id");
                var item1 = _this._items[id];
                _this._current_command.handleItem(item1);
            });
        });
    };

    StageBuilder.prototype.bindCommands = function (commands) {
        var _this = this;
        commands.click(function (e) {
            var commandName = $(e.currentTarget).attr("data-command-name");
            _this._current_command = _this.createCommandBuilder(commandName);
            _this._current_command.onComplete = _this._onCommandComplete;
        });
    };

    StageBuilder.prototype.createItem = function (id, description, x, y) {
        return new Item(id, description, x, y);
    };

    StageBuilder.prototype.getItemByName = function (name) {
        return this._items[name];
    };

    StageBuilder.prototype.createActor = function (id, description, x, y) {
        return new Actor(id, description, x, y);
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
var StageScript = (function () {
    function StageScript() {
    }
    return StageScript;
})();

var ItemScript = (function () {
    function ItemScript() {
    }
    return ItemScript;
})();

var ActorScript = (function () {
    function ActorScript() {
    }
    return ActorScript;
})();
/// <reference path="../typings/signalr/signalr.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="stagebuilder.ts" />
/// <reference path="icommand.ts" />
/// <reference path="stagescript.ts" />
/// <reference path="stagebuilder.ts" />
var Stage0000Builder = (function (_super) {
    __extends(Stage0000Builder, _super);
    function Stage0000Builder() {
        _super.call(this);
    }
    return Stage0000Builder;
})(StageBuilder);

function run_stage0000() {
    var stageBuilder = new StageBuilder();
    stageBuilder.onCommandComplete(function (commandBuilder) {
        var command = commandBuilder.prepareCommand();

        $.post("../api/stage/" + command.name, command);
    });

    $.getJSON("../api/stage/script", function (script) {
        stageBuilder.render(script, document.getElementsByClassName("canvas")[0], $.connection.sceneHub.client);
        stageBuilder.bindCommands($(".command"));
    });
}
//# sourceMappingURL=ddmckracken.js.map
