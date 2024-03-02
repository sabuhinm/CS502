let arr2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]

// let filteredArray= arr2.filter(item=> item.name.startsWith('t'))
// let filteredArray= arr2.filter(item=> item.name.startsWith('t') && item.name.endsWith('t'))
// let sum= arr2.filter(item=> item.name.startsWith('t') && item.name.endsWith('t')).reduce((acc, curr)=> acc+curr.key, 0)

// let filteredArray= arr2.filter(item=>{
//     if (item.name.endsWith('e')){
//         return {...item,name: 'SuperDev'};
// }
//     return item;
// }
// )
//     console.log(filteredArray);
let filteredArray= arr2.filter(item=> item.name.includes ('L'))
console.log(filteredArray);

// console.log(sum);
// console.log(filteredArray.length);
// console.log(filteredArray);
