import React from "react";
import { Link } from 'react-router-dom';

// @ts-ignore
import * as styles from '../../styles'
import GithubLogoText from '../Wrapper/githubLogoText';
import Team from '../Wrapper/team';

export const UserProfile = ({userImage, userName, id, repoCount}:any) => {
  return (
    <>
    <h2 style={{textAlign:'left'}}>Profile</h2>
    <div className={styles.userListDetailContainer}>
    <img className={styles.imgUserList} src={userImage} style={{ float: 'left' }} alt="no image"/>
    <div className={styles.userCardList}>
      <span className={styles.username}>{`@${userName}`}</span>
      <div className={styles.teamData}>
        <Team id={id} />
      </div>
      <GithubLogoText />
      <br />
    </div>
  </div>
  <div className={styles.userListFooterContainer}>
    <div style={{ marginTop: '12px' }}>
      <span className={styles.username}>
        Repositories
      </span>
      <br />
      <span style={{display: 'flex'}}>Repositories count: {repoCount}</span>


    </div>
  </div>
  </>
  );
};
