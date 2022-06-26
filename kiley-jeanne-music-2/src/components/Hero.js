import React, {useState, useEffect} from 'react'
import { client } from '../client';

export default function Hero() {
    const [isHeroLoading, setIsHeroLoading] = useState(false);
    const [heroContent, setHeroContent] = useState([]);

    //console.log(client)

    const getHeroContent = async ()=> {
        try{
            const response = await client.getEntries({content_type:'hero'})
            console.log(response.items[0].fields)
            //fetch(`https://cdn.contentful.com/spaces/${client.space}/environments/'hero'/entries?access_token=${client.accessToken}`)
            //.then(res=> res.json())
            //.then(data=> console.log(data))
            console.log("try")
  
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getHeroContent()
    },[])

  return (
    <div>Hero</div>
  )
}

