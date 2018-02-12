var ViewModel = function(){
  this.name = ko.observable("Memo");
  this.clickCount = ko.observable(0);
  this.imgSrc = ko.observable("img/22252709_010df3379e_z.jpg");

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };
}

ko.applyBindings(ViewModel())
