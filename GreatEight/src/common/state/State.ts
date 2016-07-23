abstract class State<EntityType>  {

    //@Override
    //public void finalize() throws Throwable{ super.finalize();}


    public abstract getName(): string;

    //this will execute when the state is entered
    public abstract enter(e: EntityType): void;

    //this is the state's normal update function
    public abstract update(e: EntityType): void;

    public abstract draw(e: EntityType): void;

    //this will execute when the state is exited. (My word, isn't
    //life full of surprises... ;o))
    public abstract exit(e: EntityType): void;

    //this executes if the agent receives a message from the 
    //message dispatcher
    public abstract onMessage(e: EntityType, t: Telegram): boolean;
}