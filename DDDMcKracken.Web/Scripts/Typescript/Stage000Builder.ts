/// <reference path="../typings/signalr/signalr.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="stagebuilder.ts" />
/// <reference path="icommand.ts" />
/// <reference path="stagescript.ts" />
/// <reference path="stagebuilder.ts" />

class Stage0000Builder extends StageBuilder {

    constructor() {
        super();
    }

}

function run_stage0000(): void {

    var stageBuilder: StageBuilder = new StageBuilder();
    stageBuilder.onCommandComplete((commandBuilder: CommandBuilder):void => {
        var command: ICommand = commandBuilder.prepareCommand();

        $.post("../api/stage/" + command.name, command);
    });

    $.getJSON("../api/stage/script", (script: StageScript):void => {
        stageBuilder.render(script
            , <HTMLDivElement>document.getElementsByClassName("canvas")[0]
            , (<any>$.connection).sceneHub.client
        );
        stageBuilder.bindCommands($(".command"));
    });

}