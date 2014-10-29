/// <reference path="icommandbuilder.ts" />
/// <reference path="commandbuilder.ts" />
var StageBuilder = (function () {
    function StageBuilder() {
    }
    StageBuilder.prototype.createCommand = function (commandName) {
        switch (commandName) {
            case "Push":
                return new PushCommandBuilder();
            case "Pull":
                return new PushCommandBuilder();
            case "Give":
                return new PushCommandBuilder();
            case "Open":
                return new PushCommandBuilder();
            case "Close":
                return new PushCommandBuilder();
            case "Read":
                return new PushCommandBuilder();
            case "WalkTo":
                return new PushCommandBuilder();
            case "PickUp":
                return new PushCommandBuilder();
            case "WhatIs":
                return new PushCommandBuilder();
            case "PutOn":
                return new PushCommandBuilder();
            case "TakeOff":
                return new PushCommandBuilder();
            case "Use":
                return new PushCommandBuilder();
            case "TurnOn":
                return new PushCommandBuilder();
            case "TurnOff":
                return new PushCommandBuilder();
            default:
                throw Error("Command not supported");
        }
    };
    return StageBuilder;
})();
//# sourceMappingURL=SceneBuilder.js.map
