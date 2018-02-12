var ViewModel = function(){
  this.currentCat = ko.observable(new Cat());
  this.incrementCounter = function() {
    this.currentCat().clickCount(this.currentCat().clickCount() + 1);
  };
}

var Cat = function(){
  this.name = ko.observable("Memo");
  this.clickCount = ko.observable(0);
  this.imgSrc = ko.observable("img/22252709_010df3379e_z.jpg");
  this.nicknames = ko.observableArray([
      { name: "Meowster"},
      { name: "Charles"},
      { name: "Denise"}
  ]);
  this.title = ko.computed(function(){
    var title;
    var clicks = this.clickCount();
    if (clicks <= 10){
      title = "Newborn";
    }
    else if (clicks <= 45 & clicks > 10){
      title = "Meow Knight"
    }
    else if (clicks >= 45 && clicks <=  50){
      title = ""
    }
    return title;
  }, this);
}

ko.applyBindings(ViewModel())
