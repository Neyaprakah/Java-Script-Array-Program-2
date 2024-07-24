//Problem 1
//Finding intersection of arrays

// function intersec(arr1,arr2)
// {
//     let arr3=[];
//     for(let i=0;i<arr1.length;i++)
//     {
//         for(let j=0;j<arr2.length;j++)
//         {
//             if(arr1[i]==arr2[j])
//             {
//                 arr3.push(arr1[i]);
//                 break;
//             }
//         }
//     }
//     return arr3;
// }
// console.log(intersec([1,2,3,4],[2,1,4,5]));


//Problem 2
//Array Slice

// let arr=['Red','Blue','Green','Yellow','Black','White','Orange'];
// console.log(arr.slice(3,5));


//Problem 3
//Finding the index of frist occurance

// let arr=[1,2,3,4,7,1,3,5];
// console.log(arr.indexOf(3));


//Problem 4
//Array Merging

// let arr1=["Red","Blue","Green"];
// console.log(arr1);
// let arr2=["Yellow","Pink","Orange"];
// console.log(arr2);
// let arr3=["White","Black","Gray"];
// console.log(arr3);
// arr1=arr1.concat(arr2,arr3);
// console.log(arr1);


//Problem 5
//Array Deduplication

// let arr=[1,2,4,1,5,3,2,6,4];
// console.log(arr);
// function deduplicate(arr){
//     return [...new Set(arr)];
// }
// console.log(deduplicate(arr));