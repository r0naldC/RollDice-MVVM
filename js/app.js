$(function(){

  function Player(name, id, active) {
    this.name = ko.observable(name);
    this.point = ko.observable(0);
    this.id = ko.observable(id);
    this.active = ko.observable(active);
    this.currentPoint = ko.observable(0);
  }

  function viewModel(){
    var self = this;

    self.playerOne = ko.observable(new Player("Player-1", 1, true));
    self.playerTwo = ko.observable(new Player("Player-2", 2, false));
    self.scoreForWin = ko.observable(20);
    self.dice = ko.observable(1);
    
    self.playerOneIsActive = ko.computed(function() {
        return self.playerOne().active();
    });

    self.imageSrc = ko.computed(function() {
      if(self.dice() > 0) return "image/dice-" + self.dice() + ".png";
      return "image/dice-1.png";
    });

    self.visibleDice = ko.computed(function() {
      return self.dice() > 0;
    });

    self.userActive = ko.computed(function() {
      if(self.playerOne().active()) return self.playerOne();
      return self.playerTwo();
    });

    function changeUserActive() {

      if(self.userActive() == self.playerOne()) {
        self.playerTwo().active(true);
        self.playerOne().active(false);
      } else {
        self.playerOne().active(true);
        self.playerTwo().active(false);
      }

    }

    self.rollDice = function() {

      var currentTotal = self.userActive().currentPoint();
      self.dice(Math.floor(Math.random() * 6) + 1);

      if(self.dice() !== 1) {
        self.userActive().currentPoint(self.dice() + currentTotal);
      } else {
        self.userActive().currentPoint(0);
        changeUserActive();
      }
    }

    self.hold = function() {
      var point = self.userActive().point();
      self.userActive().point(point + self.userActive().currentPoint());
      if(self.userActive().point() >= self.scoreForWin()) {
        alert(self.userActive().name() + "Win");
        return;
      }
      self.userActive().currentPoint(0);
      changeUserActive();
      self.dice(0);
    }
  }  

  ko.applyBindings(new viewModel());

});