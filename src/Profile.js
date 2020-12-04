import React from "react";
import WithRouterSample from "./WithRouterSample";

const data = {
  making: {
    name: "신짱구",
    description: "다양한 걸 만드는 5살 꼬마",
  },
  mengoo: {
    name: "맹구",
    description: "돌 수집하는 걸 좋아하는 5살 꼬마",
  },
};

function Profile({ match }) {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>해당 프로필이 존재하지 않는 사용자 입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
}

export default Profile;
