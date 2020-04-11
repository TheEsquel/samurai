import React from 'react';
import c from './Post.module.css';

const Posts = (props) => {
    return (
            <div className={c.item}>
                <img src="https://img.pngio.com/male-profile-picture-icon-png-profile-png-512_512.png" alt="123"/>

                <div>
                    <span>{props.name}</span>
                </div>
                <div>
                    <span>
                        {props.text}
                    </span>
                </div>
            </div>
    )

};

export default Posts