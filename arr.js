const arr= [1,2,3,4];
const lastE1= arr.pop();
//console.log(arr);

for(let i=0; i<arr.length; i++)
    {
        console.log(arr[i]);

    }
for(e1 of arr)
    {
        console.log(e1);

    }
for(index in arr)
    {
        console.log(index);

    }
    const EachArr = arr.forEach((e1, index) =>{
        console.log(e1);
    })
    const mapArr = arr.map((e1, index) =>{
        console.log(e1);
        const result = await fetch('');
        return e1;

    })
    console.log(forEachArr);
    console.log(mapArr);