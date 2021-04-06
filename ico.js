/*
1.
.fill(value, start, end) *
Fills elements of array with value from start up to, but not including, end.
This should not change the original array.

Arguments
@value: any: The value to fill array with.
@start: number: The start position.
@end: number: The end position.

@Returns
(arr: any[]) => any[]: Returns a closure that will fill the passed array with the value.
*/
 
//Ако имаме arr = [1, 2, 3, 4] и fill(0, 1, 3), трябва fill(0, 1, 3)(arr) да върне [1, 0, 0, 4].


const fill = (value, start, end) => {
    const tofill = (arr) => {
        const newArr = arr.map((item, index) => {
            console.log(item);
            if (index >= start && index < end) {                 
                return value; 
            };  
            return item;           
        });        
        return newArr;
    } 
    return tofill;   
}

arr = [1, 2, 3, 4]; 
console.log(fill(0, 1, 3)(arr)); 


/**** 2.
.map(mapperFn) *
Transform each of the elements of an array using a mapping function.

Arguments
mapperFn: (el: any) => any: The mapping function to call with the elements.

Returns
(arr: any[]) => any[]: Returns a closure that will iterate over the passed array and will call the received 
mapping function with each of the elements. 
Collect the results of the mapping function callings and return it as a new array.

Ако имаме arr = [1, 2, 3, 4], то arr.map(mapperFn(2)) трябва да даде arr = [2, 2, 2, 2]
*/

const arr2 = [1, 2, 3, 4]; 

const mapperFn = (n) => {
    console.log(n);
    return () => {
        return n; 
    } 
}

const arrNew3 = arr2.map(mapperFn(2)); 
console.log(arrNew3);

