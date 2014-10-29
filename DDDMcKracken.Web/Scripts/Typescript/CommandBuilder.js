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

    CommandBuilder.prototype.onComplete = function (handler) {
        if (handler !== undefined) {
            handler(this);
        }
    };

    CommandBuilder.prototype.prepareCommand = function () {
        return {
            name: this._commandName
        };
    };

    CommandBuilder.prototype.handleItem = function (item) {
        return false;
    };

    CommandBuilder.prototype.handleActor = function (actor) {
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
        if (this.isComplete()) {
            return _super.prototype.handleItem.call(this, item);
        }
        this._item = item;
        return true;
    };

    CommandBuilderWithItem.prototype.isComplete = function () {
        if (this._item === undefined)
            return false;
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
        if (this.isComplete()) {
            return _super.prototype.handleActor.call(this, actor);
        }
        this._actor = actor;
        return true;
    };

    CommandBuilderWithActor.prototype.isComplete = function () {
        if (this._actor === undefined)
            return false;
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
        if (this._actor === undefined)
            return false;
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
//# sourceMappingURL=CommandBuilder.js.map
