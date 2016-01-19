var app = angular.module("app", []);

var ref = new firebase ("https://brilliant-fire-1044.firebaseio.com/article");
ref.push ({title: "Ouverture du bar", description:"ouverture du bar pour croque monsieur"});
