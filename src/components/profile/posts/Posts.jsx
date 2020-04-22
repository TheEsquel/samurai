import React from 'react';
import styles from './Posts.module.css';
import Post from './post/Post'

let newPostElement = React.createRef();

const Posts = (props) => {
    console.log(props);
    let postElements = props.state.posts.map((el) => {
        return <Post name={el.name} text={el.text} id={el.id} />
    });

    let onAddPost = () => {
        props.addPost()
    };

    let onChangeText = () => {
        let newValue = newPostElement.current.value;
        props.updateNewPost(newValue)
    };

    return (
        <div className={styles.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea ref={newPostElement}
                              value={props.state.newPostValue}
                              cols="40" rows="5"
                              onChange={onChangeText}
                    />
                </div>
                <div>
                    <button onClick={ () => onAddPost(newPostElement) }>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postElements}
            </div>
        </div>
    )
};

export default Posts