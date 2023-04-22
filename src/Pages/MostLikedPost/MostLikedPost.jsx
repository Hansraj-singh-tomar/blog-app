import React, {useState, useCallback, useMemo, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import db from '../../utils/db.json'
import Post from '../../Compnents/shortPost/ShortPost';

const MostLiked = () => {
    // console.log(window.location.pathname); // "/MostLikedPost"
    // console.log(window.location.pathname.split("/")); // ['', "MostLikedPost"]
    
    const [posts, setPosts] = useState([]);

    let whichSort = useMemo(
      () => 
        window.location.pathname.split('/')[1] === "MostLikedPost" ? "numLikes" : "numComments",
        [window.location.pathname],
      )

    const quickSort = useCallback((arr) => {
      if(arr.length <= 1){
        return arr;
      } else {
        const pivot = arr[0];
        const left = [];
        const right = [];

        for(let i = 1; i < arr.length; i++){
          if(arr[i][whichSort] < pivot[whichSort]){
            left.push(arr[i]);
          }else{
            right.push(arr[i]);
          }
        }
        // return quickSort(left).concat(pivot, quickSort(right));
        return [...quickSort(left), pivot, ...quickSort(right)]
        // console.log([...quickSort(left), pivot, ...quickSort(right)]);
        // setPosts(...quickSort(left), pivot, ...quickSort(right))
      }
    }, [whichSort])

    const fetchData = useCallback(() => {
        const postData = db.posts;
        let sortedArr = quickSort(postData).reverse();
        // console.log(sortedArr);
        setPosts(sortedArr);
    }, [quickSort])

    useEffect(() => {
      fetchData();
    }, [fetchData, whichSort])

  return (
        <Container>
          {
            posts.map((items) => {
              return(
                <Post 
                  key={items.id}
                  id={items.id}
                  title={items.title}
                  date={items.datePublished}
                  numLikes={items.numLikes}
                  numComments={items.numComments}
                  whichSort={whichSort}
                />
              )
            }) 
          }
        </Container>
  )
}

{/* <h1 key={item.id} style={{border: "2px solid black", padding: "5px", margin:"2%", display: "flex", justifyContent: "space-between", width: "95%"}}> */}
export default MostLiked
