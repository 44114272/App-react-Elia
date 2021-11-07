import scott2 from '../Imgs/BikeScott-2.png'
import scott3 from '../Imgs/BikeScott-3.png'

const products = [
    {id:1,title:"Trek",description:"Trek Supercaliber 9.9 XTR MTB",stock:2,img:`${scott2}`,price:"$2000"},
    {id:2,title:"Specialized",description:"Specialized Chisel Comp MTB",stock:1,img:`${scott3}`,price:"$2000"},
    {id:3,title:"Scott",description:"Scott Scale 910 AXS MTB",stock:3,img:`${scott3}`,price:"$2000"},
    {id:4,title:"Scott",description:"Scott Scale 910 AXS MTB",stock:2,img:`${scott2}`,price:"$2000"}
]

export const getProducts = new Promise((res,rej)=>{
    setTimeout(()=>{
        res(products);
    },3000)
})
