import scott2 from '../Imgs/BikeScott-2.png'

const productDetail = [{id:1,title:"Trek",description:"Trek Supercaliber 9.9 XTR MTB",stock:2,img:`${scott2}`,price:"$2000"}]


export const getItem = new Promise((res,rej)=>{
        setTimeout(()=>{
            res(productDetail);
        },3000)
    })