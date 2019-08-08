$(function(){

  function viewModel(){
    this.name = ko.observable("Yelmy");
  }  

  ko.applyBindings(new viewModel());

});