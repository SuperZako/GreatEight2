

class Title extends State<Game> {
    private static instance = new Title();

    constructor() { super(); }

    // this is a singleton
    public static Instance() {
        return this.instance;
    }
    public getName() {
        return "Title";
    }

    public Enter(game: Game) {
    }

    // @Override
    public Execute(game: Game) {
    }

    // @Override
    public Exit(game: Game) {
    }

    // @Override
    public OnMessage(game: Game, t: Telegram) {
        return false;
    }
}
