/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

function PigGameView() {
    var self = this;

    self.player = function(id, playerName, playerScore, isActive, currentScore) {
        this.id = ko.observable(id);
        this.playerName = ko.observable(playerName);
        this.playerScore = ko.observable(playerScore);
        this.isActive = ko.observable(isActive);
        this.currentScore = ko.observable(currentScore);
    };
}

function PigGameViewModel(model) {
    var self = this;

    self.myModel = new model();

    self.enableButton = ko.observable();
    self.dice = ko.observable();
    self.displayDice = ko.observable();
    self.currentPlayer = ko.observable();

    self.startGame = function() {
        // debugger;
        self.players = ko.observableArray([]);
        self.players().push(new self.myModel.player(0, "Pedro", 0, false, 0), new self.myModel.player(1, "Juan", 0, false, 0));
        // debugger;

        self.currentPlayer(self.players()[0]);
        self.displayDice(false);
        self.enableButton(false);
        // debugger;

        // for (var player = 0; player < 2; player++) {
        //     document.querySelector(`#score-${player}`).textContent = 0;
        //     document.querySelector(`#current-${player}`).textContent = 0;
        // }
        // self.changeOfPlayer();
    };

    self.rollDice = function() {
        var numDice = Math.floor(Math.random() * 6) + 1;

        self.dice(`Img/dice-${numDice}.png`);
        self.displayDice(true);
        self.enableButton(true);

        if (numDice === 1) {
            self.changeOfPlayer();
        } else {
            self
                .currentPlayer()
                .currentScore(self.currentPlayer().currentScore() + numDice);
            // self.verifyBtnHold();

            //----------------------------
            document.querySelector(
                `#current-${self.currentPlayer().id()}`
            ).textContent = self.currentPlayer().currentScore();
        }
    };

    self.changeOfPlayer = function() {
        self.currentPlayer().currentScore(0);

        self.currentPlayer().id() === 0 ?
            self.currentPlayer(self.players()[1]) :
            self.currentPlayer(self.players()[0]);
        // verifyBtnHold();
    };

    // self.verifyBtnHold = ko.computed(function() {
    //     self.currentPlayer().currentScore() > 0;
    // });

    self.hold = function() {
        self.displayDice(false);
        self.enableButton(false);

        self
            .currentPlayer()
            .playerScore(
                self.currentPlayer().playerScore() + self.currentPlayer().currentScore()
            );

        self.displayDice(false);

        // verifyWinner();
        // verifyBtnHold();
        self.changeOfPlayer();
    };

    self.startGame();
}

var myViewModel = new PigGameViewModel(PigGameView);

$(document).ready(function() {
    ko.applyBindings(myViewModel);
});