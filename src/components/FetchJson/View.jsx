import React, { useEffect, useState } from 'react'

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const View = () => {

    const [post, setPost] = useState([]);
    const [newPost, setNewPost] = useState({
        userId: 1,
        id: randomNumber(10, 1000),
        title: '',
        body: ''
    });

    const getData = () => {
        fetch('http://localhost:3001/posts')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setPost(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    const postData = (newPost) => {
        fetch('http://localhost:3001/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Post created:', data);
                // Xử lý dữ liệu phản hồi (nếu cần)
            })
            .catch(error => {
                console.error('There was a problem with the POST request:', error);
            });
    };

    useEffect(() => {
        getData()
    }, [])

    const handleChange = (e) => {
        setNewPost({
            ...newPost,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newPost)
        postData(newPost)
        getData()

    }


    return (
        <>
            <ul>
                {post && post.map(p => (
                    <li key={p.id}>
                        {p.title}
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='title' id='title' onChange={handleChange} />
                <input type="text" placeholder='body' id='body' onChange={handleChange} />
                <button type='submit'>submit</button>
            </form>
        </>
    )
}

export default View