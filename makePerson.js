/**
 * Make a Person
 * Fill in the object constructor with the following methods below:
 * `getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)`
 * The methods that take an argument must accept only one argument and it has to be a string.
 * These methods must be the only available means of interacting with the object.
 */
var Person = function(firstAndLast) {
    let nameMap = new Map([['firstName', firstAndLast.split(' ')[0]], ['lastName', firstAndLast.split(' ')[1]]])
    this.getFullName = function() {
      return `${nameMap.get('firstName')} ${nameMap.get('lastName')}`;
    };
    this.getFirstName = function() {
      return nameMap.get('firstName')
    }
    this.getLastName = function() {
      return nameMap.get('lastName')
    }
    this.setFirstName = function(newFirstName) {
      nameMap.set('firstName', newFirstName)
    }
    this.setLastName = function(newLastName) {
      nameMap.set('lastName', newLastName)
    }
    this.setFullName = function(newFullName) {
      nameMap.set('firstName', newFullName.split(' ')[0])
      nameMap.set('lastName', newFullName.split(' ')[1])
    }
  };