describe('Task 10: task 1 testing...', function() {
	var ivan = new Man('Ivan', 40);
	var vasya = new Student('Vasya', 25);
	var pro = new Professor('Xavier', 60, 2000);
	
	function checkName(expName, actName) {
		it("his name should be " + expName, function() {
			expect(expName).toBe(actName);
		});
	}
	
	function checkAge(expAge) {
		it('age must be > 0', function() {
			expect(expAge).toBeGreaterThan(0);
		});
		it('age must be < 120', function() {
			expect(expAge).toBeLessThan(120);
		});

	}
	
	function checkFunction(obj, func, result) {
		it('method should be a function', function() {
			expect(typeof func).toBe('function');
		});
		it('method should return a value: ' + result, function() {
			expect(func.call(obj)).toEqual(result);
		});		
	}
	
	describe("Let's test a man...", function() {
		function wrongName() {
			var robo = new Man(40, 40);
		}
		function wrongAge() {
			var robo = new Man('r2d2', 400);
		}
		
		checkName(ivan.name, 'Ivan');
		
		it('if we init him with a wrong name we should get an Error', function() {
			expect(wrongName).toThrowError('Name should be a string');
		});
		
		checkAge(ivan.age);
		
		it('if we init him with a wrong age we should get an Error', function() {
			expect(wrongAge).toThrowError('Age should be a number between 0 and 120');
		});
		
		checkFunction(ivan, ivan.live, 'Ivan is alive');
		
	});
	
	describe("Let's test a student...", function() {
		
		checkName(vasya.name, 'Vasya');	
		
		checkAge(vasya.age);
		
		checkFunction(vasya, vasya.live, 'Vasya is alive');
		
		checkFunction(vasya, vasya.study, 'Vasya is studying');
	});
	
	describe("Let's test a professor...", function() {
		beforeEach(function() {
			pro.giveExam(vasya);
		});
		afterEach(function() {
			pro.experience = 0;
			pro.salary = 2000;
		});		
		
		checkName(pro.name, 'Xavier');	
		
		checkAge(pro.age);
		
		it('salary should be 2002', function() {
			expect(pro.salary).toBe(2002);	
		});
		it('experience should be 1', function() {
			expect(pro.experience).toBe(1);	
		});
		
		it('Exam score should be > 0', function() {
			expect(pro.giveScore()).toBeGreaterThan(0);	
		});
		it('Exam score should not be > 5', function() {
			expect(pro.giveScore()).not.toBeGreaterThan(5);	
		});
		it('checkState should return current exp and salary', function() {
			expect(pro.checkState()).toBe('Exp: ' + pro.experience + '. Salary: ' + pro.salary);	
		});
		//checkFunction(pro, pro.live, 'Xavier is alive');
	});		
	
	describe('duckType function test', function() {
		it('Ivan is a ' + duckType(ivan), function() {
			expect(duckType(ivan)).toBe('Man');
		});	
		it('Ivan is not a Student', function() {
			expect(duckType(ivan)).not.toBe('Student');
		});
		it('Vasya is not a Man', function() {
			expect(duckType(vasya)).not.toBe('Man');
		});
		it('Vasya is a Student', function() {
			expect(duckType(vasya)).toBe('Student');
		});
		it('Xavier is a ' + duckType(ivan), function() {
			expect(duckType(pro)).toBe('Man');
		});	
		it('Xavier is not a Student', function() {
			expect(duckType(pro)).not.toBe('Student');
		});		
		it('Any other object should return: Unknown object', function() {
			expect(duckType({})).toBe('Unknown object');
		});
		it('If we pass not an Object, we should get an error', function() {
			expect(duckType).toThrowError('Not an Object!');
		});
	});

});