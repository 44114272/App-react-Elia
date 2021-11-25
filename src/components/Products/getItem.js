import scott2 from '../Imgs/BikeScott-2.png'
import scott3 from '../Imgs/BikeScott-3.png';
import trekWomen from '../Imgs/TrekWomen.png';
import trekRoad from '../Imgs/TrekRoad.png';
import bikeGirl from '../Imgs/BikeBoy.png'

const productDetail = [
{
    id:1,
    title:"Scott",
    description:"Scott Supercaliber 9.9 XTR MTB",
    stock:2,
    img:`${scott2}`,
    category: "mountain",
    price: 2500 
},
{
    id:2,
    title:"Specialized",
    description:"Specialized Chisel Comp MTB",
    stock:2,
    img:`${scott3}`,
    category: "mountain",
    price: 2500 
},
{
    id:3,
    title:"Trek",
    description:"Trek XST Road",
    stock:2,
    img:`${trekRoad}`,
    category: "road",
    price: 3000
},
{
    id:4,
    title:"Trek",
    description:"Trek MTB for women",
    stock:4,
    img:`${trekWomen}`,
    category: "womens",
    price: 800 
},
{
    id:5,
    title:"Norco",
    description:"Bike Norco for Kids",
    stock:5,
    img:`${bikeGirl}`,
    category: "kids",
    price: 300 
}]


export const getItem = new Promise((res,rej)=>{
        setTimeout(()=>{
            res(productDetail);
        },2000)
    })