const players = [
    {
        name: "Player 1",
        score: 50,
        id: 1
      },
      {
        name: "Player 2",
        score: 85,
        id: 2
      },
      {
        name: "Player 3",
        score: 95,
        id: 3
      },
      {
        name: "Player 4",
        score: 80,
        id: 4
      }
]

const Header = (props) => {
    return (
        <header>
            <h1>{ props.title }</h1>
            <span className="stats">Players: { props.totalPlayers }</span>
        </header>
    );
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                {props.name}
            </span>
            <Counter />
        </div>
    );
}

class Counter extends React.Component {

    constructor() {
        super()
        this.state = {
            score: 0
        };
    }

    incrementScore = () => {
        this.setState({
            score:this.state.score + 1
        });
    }

    decrementScore = () => {
        this.setState({
            score: this.state.score - 1
        });
    }

    render(){
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={ this.decrementScore }> - </button>
                <span className="counter-score"> { this.state.score } </span>
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
        );
    }
}

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header 
                title="Scoreboard" 
                totalPlayers={props.initialPlayers.length} 
            />

            {/* {Players list} */}
            {props.initialPlayers.map( player => 
                <Player 
                    name={player.name} 
                    score={player.score} 
                    key={player.id.toString()}
                />
            )}

            
        </div>
    );
}

ReactDOM.render(
    <App initialPlayers={players}/>,
    //container element
    document.getElementById("root")
);