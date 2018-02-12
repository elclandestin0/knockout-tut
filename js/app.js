var ViewModel = function(){
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
    else if (clicks <= 45 & clicks >10){
      title = "Meow Knight"
    }
    else if (clicks >= 45 && clicks <=  50){
      title = ""

    }
    return title;
  }, this);

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };
}

ko.applyBindings(ViewModel())
