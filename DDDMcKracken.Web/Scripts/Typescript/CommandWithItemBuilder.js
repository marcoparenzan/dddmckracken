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
var CommandBuilderWithItem = (function () {
    function CommandBuilderWithItem(name) {
        this._commandName = name;
    }
    CommandBuilderWithItem.prototype.addItem = function (item) {
        if (this.isComplete()) {
            return false;
        }
        this._item = item;
        return true;
    };

    CommandBuilderWithItem.prototype.isComplete = function () {
        if (this._item === undefined)
            return false;
        return true;
    };

    CommandBuilderWithItem.prototype.prepareCommand = function () {
        return {
            name: this._commandName,
            target: this._item.name
        };
    };
    return CommandBuilderWithItem;
})();

var PushCommandBuilder = (function (_super) {
    __extends(PushCommandBuilder, _super);
    function PushCommandBuilder() {
        _super.call(this, "Push");
    }
    return PushCommandBuilder;
})(CommandBuilder);

var PullCommandBuilder = (function (_super) {
    __extends(PullCommandBuilder, _super);
    function PullCommandBuilder() {
        _super.call(this, "Pull");
    }
    return PullCommandBuilder;
})(CommandBuilder);

var GiveCommandBuilder = (function (_super) {
    __extends(GiveCommandBuilder, _super);
    function GiveCommandBuilder() {
        _super.call(this, "Give");
    }
    return GiveCommandBuilder;
})(CommandBuilder);

var OpenCommandBuilder = (function (_super) {
    __extends(OpenCommandBuilder, _super);
    function OpenCommandBuilder() {
        _super.call(this, "Open");
    }
    return OpenCommandBuilder;
})(CommandBuilder);

var CloseCommandBuilder = (function (_super) {
    __extends(CloseCommandBuilder, _super);
    function CloseCommandBuilder() {
        _super.call(this, "Close");
    }
    return CloseCommandBuilder;
})(CommandBuilder);

var ReadCommandBuilder = (function (_super) {
    __extends(ReadCommandBuilder, _super);
    function ReadCommandBuilder() {
        _super.call(this, "Read");
    }
    return ReadCommandBuilder;
})(CommandBuilder);

var WalkToCommandBuilder = (function (_super) {
    __extends(WalkToCommandBuilder, _super);
    function WalkToCommandBuilder() {
        _super.call(this, "WalkTo");
    }
    return WalkToCommandBuilder;
})(CommandBuilder);

var PickUpCommandBuilder = (function (_super) {
    __extends(PickUpCommandBuilder, _super);
    function PickUpCommandBuilder() {
        _super.call(this, "PickUp");
    }
    return PickUpCommandBuilder;
})(CommandBuilder);

var WhatIsCommandBuilder = (function (_super) {
    __extends(WhatIsCommandBuilder, _super);
    function WhatIsCommandBuilder() {
        _super.call(this, "WhatIs");
    }
    return WhatIsCommandBuilder;
})(CommandBuilder);

var PutOnCommandBuilder = (function (_super) {
    __extends(PutOnCommandBuilder, _super);
    function PutOnCommandBuilder() {
        _super.call(this, "PutOn");
    }
    return PutOnCommandBuilder;
})(CommandBuilder);

var TakeOffCommandBuilder = (function (_super) {
    __extends(TakeOffCommandBuilder, _super);
    function TakeOffCommandBuilder() {
        _super.call(this, "TakeOff");
    }
    return TakeOffCommandBuilder;
})(CommandBuilder);

var UseCommandBuilder = (function (_super) {
    __extends(UseCommandBuilder, _super);
    function UseCommandBuilder() {
        _super.call(this, "Use");
    }
    return UseCommandBuilder;
})(CommandBuilder);

var TurnOnCommandBuilder = (function (_super) {
    __extends(TurnOnCommandBuilder, _super);
    function TurnOnCommandBuilder() {
        _super.call(this, "TurnOn");
    }
    return TurnOnCommandBuilder;
})(CommandBuilder);

var TurnOffCommandBuilder = (function (_super) {
    __extends(TurnOffCommandBuilder, _super);
    function TurnOffCommandBuilder() {
        _super.call(this, "TurnOff");
    }
    return TurnOffCommandBuilder;
})(CommandBuilder);
//# sourceMappingURL=CommandWithItemBuilder.js.map
