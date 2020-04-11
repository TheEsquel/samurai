import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={styles.content}>
            <div>
                <img className={styles.content_img}
                     src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg" alt=""/>
            </div>
            <div className={styles.description}>
                Profile description
                {/*<img*/}
                {/*src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_2nqm0H20gpO-Pf9BsBwuAYt3McWcb-6rFs37i244h71Lyrnkg&s"*/}
                {/*alt=""/>*/}
                {/*<img src="https://img.pngio.com/male-profile-picture-icon-png-profile-png-512_512.png" alt="1"/>*/}
            </div>
        </div>
    )

};

export default ProfileInfo