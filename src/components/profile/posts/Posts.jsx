import React from 'react';
import styles from './Posts.module.css';
import Post from './post/Post'
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {Textarea} from "../../common/formComponents/formControls";
import {required} from "../../common/validators/validators";


let AddPostForm = props => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'post'}  validate={[required]}/>
            <div>
                <button> Add post</button>
            </div>
        </form>
    )
};

AddPostForm = compose(
    reduxForm({
        form: 'addPost'
    })
)(AddPostForm);


let Posts = props => {
    let postElements = props.state.posts.map((el) => {
        return <Post name={el.name} text={el.text} id={el.id} />
    });

    const onSubmit = form => {
        props.addPost(form)
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