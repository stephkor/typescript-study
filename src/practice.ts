// const message: string = 'hello world';

// console.log(message);



// let count = 0;
// count += 1;
// count = '갑자기 분위기 문자열'; // 에러가 남


// const done: boolean = true;

// const nums : number[] = [1,2,3];
// const messages: string[] = ['what', 'the', 'fuck'];

// messages.push(1); // 에러가 남. 


// let mightBeUndefined: string | undefined = undefined ; // string 일수도 있고 undefined 일 수도 있음;
// let nullableNumber : number|null = null; // can be number or null

// let color: 'red' | 'orange' | 'yellow' = 'red' ; // it can be one of the values of 'red, 'orange' and  'yellow'

// color = 'yellow';
// color = 'green'; // error 



// function sum(x:number, y:number) : number { // the ":number" written defines the result of the function is number. if you declared it to be number and returns something else, it will return error. 
//     return x + y;
// }

// sum(1,2)


// if the function would not return anything, you can set return type as void. 



// declaring interface called Shape 

interface Shape {
    getArea(): number; // Shape interface should have getArea, and the function returns number. 

}


// class Circle implements Shape {
//     // declared that this class will fulfill Shape interface's quality by using the keywork 'implements'

//     radius : number; // set the variable raidus's return .

//     constructor(radius: number) {
//         this.radius = radius;
//     }

    
//     getArea() {
//         return this.radius + this.radius * Math.PI;
//     }
//     // fulfilled all the qualities of Shape, getting getArea function and it's return type. 
// }

// => accessor 를 사용해서 constructor 를 통해 하나하나 설정해주는 작업을 생략 할 수 있다. 

class Circle implements Shape {
    constructor(public radius: number) {
        this.radius = radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

// class Rectangle implements Shape {
//     width: number;
//     height: number; 
//     constructor(width: number, height:number) {
//         this.width = width;
//         this.height = height;
//     }
//     getArea() {
//         return this.width * this.height; 
//     }
// }

// => accessor 를 사용해서 constructor 를 통해 하나하나 설정해주는 작업을 생략 할 수 있다. 

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5) ;
console.log(circle.radius) // 에러 없이 작동;
console.log(rectangle) // width 가 private 이기 때문에 에러 발생! 

/*
public accessor 는 특정 값이 클래스의 코드 밖에서도 조회 가능하다는 것을 의미합니다.
 예를 들어서 circle.width 이런 식으로 코드를 작성하면 해당 값을 바로 조회 할 수 있습니다. 
 반면에 rectangle.width 를 조회 하려고 하면 컴파일 단계에서 에러가 발생해버립니다.
 */

const shapes: Shape[] = [ new Circle(5), new Rectangle(10, 5)]

shapes.forEach(shape => {
    console.log(shape.getArea())
})