interface ICommandBuilder {
    handleItem(item: IItem): boolean;
    handleActor(actor: IActor): boolean;

    isComplete(): boolean;
    onComplete: (commandBuilder:ICommandBuilder) => void;
    prepareCommand(): ICommand;

    run(): void;
}
