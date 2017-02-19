

var Model = function(obj){
   this.attributes = obj
}

Model.prototype.get = function(attr){
   return this.attributes[attr]
}

Model.prototype.set = function(attrStr, val){
   this.attributes[attrStr] = val
}


var personMod = new Model({age: 44, name: "Winslow", hasPet: true})

var theName = personMod.get('age')
console.log(theName)

personMod.set('price', 100)

console.log(personMod)

