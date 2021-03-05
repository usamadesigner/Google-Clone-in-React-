import {useEffect,useState} from 'react'
import API_KEY from '../keys'
const Context_key="2ae5985a608031f9f";
const   useGoogleSearch= (term)=>{
const [datas,setData]=useState(null);

useEffect(()=>{
const fetchdata=async()=>{
      fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${Context_key}&q=${term}`)
      .then(response=>response.json())
      .then(result=>{setData(result)})
}
fetchdata();

},[term])
return {datas}
};
// eslint-disable-next-line
export default useGoogleSearch;
