import React from 'react';
import styles from './Posts.module.css';
import Post from './post/Post'
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";

let newPostElement = React.createRef();

let AddPostForm = props => {

    return (
        <form action="" onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'addPost'} />
            <div>
                <button>add post</button>
            </div>
        </form>
    )
}

AddPostForm = compose(
    reduxForm({
        form: 'addPost'
    })
)(AddPostForm)


let Posts = (props) => {
    let postElements = props.state.posts.map((el) => {
        return <Post name={el.name} text={el.text} id={el.id} />
    });

    const onSubmit = form => {
        console.log(form);
    };

    return (
        <div className={styles.postsBlock}>
            <p>My posts</p>
            <AddPostForm  onSubmit={onSubmit} />
            <div className={styles.posts}>
                {postElements}
            </div>
        </div>
    )
};

export default Posts