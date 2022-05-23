let helloWorld: string = "hello World"
interface User{
    name: string,
    id:number
}

// Using user Interface to assign the same keys to the variable
const user: User = {
    'name':'Satyam',
    id:25,
}


// Interface declaration with classes
class UserAccount{
    name:string;
    id:number;
    age: number
    constructor(name:string, id: number, age: number){
        this.name = name,
        this.id = id;
        this.age = age
    }
}

const userAcc:User = new UserAccount('Murphy', 20, 25)
console.log('userAcc', userAcc)

// Working with functions with Interface
// You can use interfaces to annotate parameters and return values to functions:


function printName(): User{
    return {
        name:'Satyam',
        id:20
    }
}

function deleteName(user:User){}

// There is already a small set of primitive types available in JavaScript: boolean, bigint, null, number, string, symbol, and undefined, which you can use in an interface. TypeScript extends this list with a few more, such as any (allow anything), unknown (ensure someone using this type declares what the type is), never (it’s not possible that this type could happen), and void (a function which returns undefined or has no return value).