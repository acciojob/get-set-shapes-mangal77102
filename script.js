//complete this code
class Rectangle {
	constructor(width,heigth){
		this._width=width;
		this._heigth=heigth;
	}
	get width()
	{
		return this._width;
	}
	get heigth()
	{
		return this._heigth;
	}
	getArea()
	{
		console.log(width*heigth);
	}
}

class Square extends Animal {
	constructor(side)
	{
		super(width,heigth);
	}
	getPerimeter()
	{
		console.log(4 * side);
	}
	
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
