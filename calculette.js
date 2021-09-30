var myArgs = process.argv.slice(2);
var a=Number(myArgs[1]);
var b=Number(myArgs[2]);


switch (myArgs[0]){
    case "multiply":
        console.log(a*b);
        break;
    case "divide":
        console.log(a/b);
        break;
    case "add":
        console.log(a+b);
        break;
    
    case "sub":
        console.log(a-b);
        break;
    default:
        console.log("Euh jsp ce que tu veux fréro");
        break;
}
