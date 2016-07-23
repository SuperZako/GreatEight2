/// <reference path="./common/state/StateMachine.ts" />
/// <reference path="./GameStates/Title.ts" />
class Game {

    private stateMachine: StateMachine<Game>;

    constructor() {
        this.stateMachine = new StateMachine<Game>(this);
        this.stateMachine.SetCurrentState(Title.Instance());
        this.stateMachine.SetPreviousState(Title.Instance());
        this.stateMachine.SetGlobalState(null);
    }


    public update() {
        //run the logic for the current state
        this.stateMachine.Update();
    }

    public draw() {
        //run the logic for the current state
        this.stateMachine.draw();
    }


    public ChangeState(state: State<Game>) {
        this.stateMachine.changeState(state);
    }

    public handleMessage(msg: Telegram) {
        this.stateMachine.handleMessage(msg);
    }

}