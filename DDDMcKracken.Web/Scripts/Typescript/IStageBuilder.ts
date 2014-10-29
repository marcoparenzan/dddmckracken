/// <reference path="iitem.ts" />
/// <reference path="icommandbuilder.ts" />

interface IStageBuilder {
    getItemByName(name: string): IItem;
    createCommandBuilder(commandName: string): ICommandBuilder;
    onCommandComplete(handler: (commandBuilder:ICommandBuilder) => void): void;
    bindCommands(commands: JQuery): void;
    bindItems(items: JQuery): void;
    bindActors(actors: JQuery): void;
}