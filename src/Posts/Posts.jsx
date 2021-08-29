import React from 'react';
import './Posts.css';
import Post from '../Posts/Post/Post';
import logo from '../public/blue-origami-bird.png';
import postService from '../services/post-service';

// function Posts() {
//     return (
//            <div className="Posts">
//             <Post imgUrl={logo} imgAlt="logo2" authorName="Viktor Voev">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio corporis facilis ipsum voluptates, similique illum ratione minima? Dolores unde vero id amet animi quam? Excepturi culpa harum cupiditate amet qui.</Post>
//         </div>
//     )
// }

class Posts extends React.Component {
    state = {
        posts: null
    }

    componentDidMount(){
        postService.load().then(posts => {
            this.setState({ posts });
        })
    }

    render() {
        const { posts } = this.state;
        return posts ? <div className="Posts">
                        {posts.map((post) =>  <Post key={post.id} imgUrl={logo} imgAlt="logo2" authorName={post.userId}>{post.body}</Post>)}
                       </div> : <div>Loading...</div>
                
    }
};

export default Posts
