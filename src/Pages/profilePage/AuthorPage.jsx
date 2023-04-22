import React, {useState, useEffect, useCallback} from 'react'
import { useParams } from 'react-router-dom';

import AuthorCard from '../../Compnents/AuthorCard/AuthorCard';
import FilterHeader from '../../Compnents/FilterHeader/FilterHeader';

import db from '../../utils/db.json'
import UserPostList from '../../Compnents/UserPostList/UserPostList';

const AuthorPage = () => {
    const { authorId } = useParams();
    const [author, setAuthor] = useState([]);
    const [posts, setPosts] = useState([]);
    const [activeButton, setActiveButton] = useState('')

    const fetchUser = useCallback( async (id) => {
        const user = db.authors[id]
        setAuthor(user)
    }, [])

    const fetchPost = useCallback( async (id) => {
        let user = db.posts;  
        setPosts(user);
    },[])

    useEffect(() => {
        fetchUser(authorId);
    }, [fetchUser, authorId])

    useEffect(() => {
        fetchPost(authorId);
    }, [fetchPost, authorId])

      // Sorting By Assending Date
  const ascDate = useCallback(() => {
    setActiveButton('ascDate')
    let data = posts

    // bubble sort for shorting time complexity = O(n * n)
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length - i - 1; j++) {
        if (data[j].datePublished > data[j + 1].datePublished) {
          let temp = data[j]
          data[j] = data[j + 1]
          data[j + 1] = temp
        }
      }
    }

    setPosts([...data])
  }, [posts])

  // Sorting By decending Date
  const dscDate = useCallback(() => {
    setActiveButton('dscDate')
    let data = posts

    // bubble sort for shorting time complexity = O(n * n)

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length - i - 1; j++) {
        if (data[j].datePublished > data[j + 1].datePublished) {
          let temp = data[j]
          data[j] = data[j + 1]
          data[j + 1] = temp
        }
      }
    }
    setPosts([...data.reverse()])
  }, [posts])

  // Sorting By Assending Like
  const ascLike = useCallback(() => {
    setActiveButton('ascLike')
    let data = posts

    // bubble sort for shorting time complexity = O(n * n)

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length - i - 1; j++) {
        if (data[j].numLikes > data[j + 1].numLikes) {
          let temp = data[j]
          data[j] = data[j + 1]
          data[j + 1] = temp
        }
      }
    }

    setPosts([...data])
  }, [posts])

  // Sorting By decending Like
  const dscLike = useCallback(() => {
    setActiveButton('dscLike')
    let data = posts

    // bubble sort for shorting time complexity = O(n * n)

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length - i - 1; j++) {
        if (data[j].numLikes > data[j + 1].numLikes) {
          let temp = data[j]
          data[j] = data[j + 1]
          data[j + 1] = temp
        }
      }
    }

    setPosts([...data.reverse()])
  }, [posts])

  return (
    <>
        <AuthorCard author = {author}/>
        <hr/>
        <h3 className='text-center mt-4'>Change List According to you.</h3>
        <FilterHeader
            activeButton={activeButton}
            ascDate={ascDate}
            dscDate={dscDate}
            ascLike={ascLike}
            dscLike={dscLike}
        />
        <UserPostList posts={posts}/>
    </>
  )
}

export default AuthorPage