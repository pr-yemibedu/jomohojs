/**
 * @name jo.Point
 * @class The Point class defines a simple 2d vector
 * with a set of useful functions
 * there are two kinds of arithmetic functions, the first
 * which return a new vector are called: sum, dif, mul, div and neg
 * the second changes the vector its called on and they are called:
 * add, subtract, multiply, divide and negate
 */

define(['./jo', './core'], function(jo, core){
	
	jo.Point = core.Class.extend({
		/**
		 * @constructor
		 * @methodOf joPoint
		 * @param {Number} x
		 * @param {Number} y
		 */
		init: function(x, y){
			this.x = x;
			this.y = y;
		},
		/**
		 * @methodOf jo.Point
		 * @description copies another point p
		 * @param p
		 * @returns {this}
		 */
		copy: function(p){
			this.x = p.x;
			this.y = p.y;		
			return this;
		},
		/**
		 * @methodOf jo.Point
		 * @description returns a copy of itself
		 * @returns {jo.Point}
		 */
		getCopy: function(){
			return new jo.Point(this.x, this.y);
		},
		/**
		 * @methodOf jo.Point
		 * @description returns true if equal
		 * @param p
		 * @returns {Boolean}
		 */
		equal: function(p){
			return this.x === p.x && this.y === p.y;	
		},
		/**
		 * @methodOf jo.Point
		 * @description forms a vector with length 1 from angle, where zero is straight right
		 * @param angle
		 * @returns {this}
		 */
		fromAngle: function(angle){
			this.x = Math.cos(angle);
			this.y = Math.sin(angle);
			return this;
		},
		/**
		 * @methodOf jo.Point
		 * @description
		 * @returns {number}
		 */
		toAngle: function(){
			var angle = Math.atan2(this.y, this.x); //weird weird atan2
			angle = angle < 0? (2 * Math.PI) + angle : angle;
			return angle;
		},
		/**
		 * @methodOf jo.Point
		 * @description dot product or, scalar product
		 * @param {jo.Point} a other Point
		 * @returns {Number}
		 */
		dot: function(a){
			return this.x*a.x+ this.y*a.y;
		},
		/**
		 * @methodOf jo.Point
		 * @description length of the vector times length of the vector,
		 * 		sometimes you just need to compare the square
		 * @returns {Number}
		 */
		lengthSqr: function(){
			return this.x*this.x+this.y*this.y;
		},
		/**
		 * @methodOf jo.Point
		 * @description length of the vector
		 * @returns {Number}
		 */
		length: function(){
			return Math.sqrt( this.x*this.x+this.y*this.y);
		},
		/**
		 * @methodOf jo.Point
		 * @description normalizes the vector
		 * @returns {this}
		 */
		normalize: function(){
			return this.multiply(this.length());
		},
		/**
		 * @methodOf jo.Point
		 * @description divides the vector with its length, to set its length to 1
		 * @returns {this}
		 */
		normal: function(){
			return this.mul(1/this.length());
		},
		/**
		 * @methodOf jo.Point
		 * @description return the left Normal, width the same length as the vector
		 * @returns {jo.Point}
		 */
		leftNormal: function(){
			return new jo.Point(-this.y, this.x);
		},
		/**
		 * @methodOf jo.Point
		 * @description return the right Normal, width the same length as the vector
		 * @returns {jo.Point}
		 */
		rightNormal: function(){
			return new jo.Point(this.y, -this.x);
		},
		/**
		 * @methodOf jo.Point
		 * @description returns the sum of this and another vector
		 * @param {jo.Point} p
		 * @returns {jo.Point}
		 */
		sum: function(p){
			return new jo.Point(this.x+p.x, this.y+p.y);
		},
		/**
		 * @methodOf jo.Point
		 * @description returns the difference of this and another vector
		 * @param {jo.Point} p
		 * @returns {jo.Point}
		 */
		dif: function(p){
			return new jo.Point(this.x-p.x, this.y-p.y);
		},
		/**
		 * @methodOf jo.Point
		 * @description returns this multiplied with a scalar
		 * @param {Number} a
		 * @returns {jo.Point}
		 */
		mul: function(a){
			return new jo.Point(this.x*a, this.y*a);
		},
		/**
		 * @methodOf jo.Point
		 * @description returns this divided by a scalar
		 * @param {Number} a
		 * @returns {jo.Point}
		 */
		div: function(a){
			return new jo.Point(this.x/a, this.y/a);
		},
		/**
		 * @methodOf jo.Point
		 * @description returns new point which is this negated
		 * @returns {jo.Point}
		 */
		neg: function(){
			return new jo.Point(this.x*-1, this.y*-1);
		},
		/**
		 * @methodOf jo.Point
		 * @description adds another vector to this
		 * @param {jo.Point} p
		 * @returns {this}
		 */
		add: function(p){
			this.x+=p.x;
			this.y+=p.y;
			return this;
		},
		/**
		 * @methodOf jo.Point
		 * @description subtracts another vector from this
		 * @param {jo.Point} p
		 * @returns {this}
		 */
		subtract: function(p){
			this.x-=p.x;
			this.y-=p.y;
			return this;
		},
		/**
		 * @methodOf jo.Point
		 * @description multiplies this with a scalar
		 * @param {Number} a
		 * @returns {this}
		 */
		multiply: function(a){
			this.x*=a;
			this.y*=a;
			return this;
		},
		/**
		 * @methodOf jo.Point
		 * @description divides this by a scalar
		 * @param {Number} a
		 * @returns {this}
		 */
		divide: function(a){
			this.x/=a;
			this.y/=a;
			return this;
		},
		/**
		 * @methodOf jo.Point
		 * @description multiplies this with -1
		 * @returns {this}
		 */
		negate: function(){
			this.x*=-1;
			this.y*=-1;
			return this;
		}
	});
	return jo.Point;
});