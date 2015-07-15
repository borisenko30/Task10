var Man = function (name, age) {
	if(typeof name === 'string'){
		this.name = name;
	} else {
		throw new Error('Name should be a string');
	};
	if(age > 0 && age < 120) {
  		this.age = age;
	} else {
		throw new Error('Age should be a number between 0 and 120');	
	};
};
Man.prototype.live = function () {
  return this.name + ' is alive';
};
 
var Student = function (name, age) {
  Man.call(this, name, age);
};

Student.prototype = new Man('Max', 30);

Student.prototype.study = function () {
  return this.name + ' is studying';
};

function isObject(obj) {
  if (!(obj instanceof Object)){
	  throw new Error('Not an Object!')
  };
}


function duckType(o) {
  isObject(o);
	
  if (o.name && o.age && o.live) {
    if (o.study) {
      return 'Student';
    } else {
      return 'Man';
    }
  } else {
	return 'Unknown object';  
  };
}
 
function duckTypeModified() {
  isObject(this);
  if (this.name && this.age && this.live) {
    if (this.study) {
      return 'Student';
    } else {
      return 'Man';
    }
  } else {
	return 'Unknown object';  
  };
}

var goga = new Man('Goga', 33);
var max = new Student('Max', 30);

console.log('Max is a ' + duckType(max));
console.log('Goga is a ' + duckTypeModified.call(goga));
console.log(max.study());
console.log(max.live());

//-- code for Task 10: Professor added.
var Professor = function (name, age, salary) {
  Man.call(this, name, age);
  this.salary = salary || 1000;
  this.experience = 0;
};

Professor.prototype = new Man('Xavier', 60);

Professor.prototype.giveExam = function (person) {
	isObject(person);
  	if(duckType(person)!=='Student') {
	  return "You're not a student, you can't take the exam";
	} else {
	  	this.experience += 1;
	  	this.salary += this.salary*this.experience/1000;
	  	return this.giveScore();
	};
};
  
Professor.prototype.giveScore = function() {
	return Math.floor(Math.random()*4)+1; 
};
	
Professor.prototype.checkState = function() {
	return 'Exp: ' + this.experience + '. Salary: ' + this.salary;
};