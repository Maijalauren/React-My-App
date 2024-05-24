import './App.css'
import React, {useState, useEffect} from 'react'

//props  voi olla props tai jos tietää nimen, niin esim. tässä huomio. 
//Jos on useita propseja, menee esim. huomio,
const Posts = () => {

    //Komponentin tilan määritys
  //state hook, ja useEffect hook
    const [posts, setPosts] = useState([])
    const [showPosts, setshowPosts] = useState(false)
useEffect(() => {
  fetch ("https://jsonplaceholder.typicode.com/posts")
  .then (res => res.json()) //muuttaa datan javascript muotoiseksi nimestä huolimatta
  .then (oliot => setPosts(oliot))
}

 ,
 [] 
)



  return (
    <>

    <h2 onClick={() => setshowPosts(!showPosts)}>Posts from typicode</h2>

   
    {
      showPosts && posts && posts.map(p =>

        <div className='posts' key={p.id}>

        <h4>{p.title}</h4>
        <p>{p.body}</p>
       


        </div>

      )
    }


      </>
    )
}

export default Posts
