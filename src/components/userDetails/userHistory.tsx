import React from "react";
// @ts-ignore
import * as styles from "../../styles";
import moment from "moment";

export const UserHistory = ({
  userImage,
  userCase,
  userName,
  createdAt,
}: any) => {
  const now = moment(createdAt).format("MMM DD, YYYY");
  return (
    <>
      <div className={styles.userListDetailContainer}>
        <span style={{ float: "left" }}>{now}</span>
        <br />
        <br />
        <img
          className={styles.imgUserListHistory}
          src={userImage}
          style={{ float: "left" }}
          alt="no image"
        />
        <div className={styles.userCardList}>
          <span className={styles.username}>
            {`@${userName}`} &nbsp; {userCase}
          </span>
          <br />
          <span>user/repo_name</span>
        </div>
      </div>
      <div className={styles.userListFooterContainer}></div>
    </>
  );
};
