// founding the smallest values
function smallest(arr)
{
  let min = arr[0];
  for(let element of arr)
  {
    if(element < min)
    {
      min = element;
    }
  }

  return min;
}
console.log(smallest([1, 4, 5, 7, 8, 9, 0, 2, 1]))



function smallest_n(sortedarr)
{
  return sortedarr[0]
}
console.log(smallest_n([1, 2,4 ,5 ,7 , 9]))


function random_sort(result)
{
  for(let i=0; i<result.length;i++)
  {
    for(let value of result)
    {
      for(let j=result.length-1;j>0;j--)
      {
        console.log(i, value, j)
      }
    }
  }
  return result
}

console.log(random_sort([1,2 , 4, 6, 9,8]))