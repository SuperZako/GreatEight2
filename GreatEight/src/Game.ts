/// <reference path="./SoccerPitch.ts" />

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




    public ChangeState(state: State<Game>) {
        this.stateMachine.ChangeState(state);
    }

}