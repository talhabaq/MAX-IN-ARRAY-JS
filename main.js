Max 
const talha=(num)=>{
  let result=num[0]
  for(const number of num)
    {
      if(number>result)
      {
        result=number
      }
      
    }
  return result
}
num=[1,2,3,4,5,23,7]
console.log(talha(num))
