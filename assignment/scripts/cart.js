console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
var basket=[];
function addItem(item){
basket.push(item)
if(basket.includes(item))
return true;
}
console.log(addItem("banana"));
// I hope this is right, i do not know how i would test it to be false
function listItems(basket){
for(var i=0; i<basket.length; i++){
    console.log(basket[i]);
}
}
console.log(listItems(["candy","peanuts","pineapple"]));

function empty(basket){
if(basket.length>=0){
    basket.pop();
}}
console.log(empty(basket));
// Is it suppose to come out as undefined