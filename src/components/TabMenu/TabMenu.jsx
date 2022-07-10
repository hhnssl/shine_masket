import React from 'react';
import styled from 'styled-components';

import IconHome from '../../assets/icon/icon-home.svg';
import IconHomeHover from '../../assets/icon/icon-home-fill.png';
import IconChat from '../../assets/icon/icon-message-circle.svg';
import IconChatHover from '../../assets/icon/icon-message-circle-fill.png';
import IconUpload from '../../assets/icon/icon-edit.svg';
import IconMyprofile from '../../assets/icon/icon-user.svg';
import IconMyprofileHover from '../../assets/icon/icon-user-fill.png';

// import { Link } from 'react-router-dom';

const Footer = styled.ul`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  border-top: 1px solid #dbdbdb;
  display: flex;
  justify-content: space-between;
  gap: 2%;
  > li {
    width: 25%;
    padding: 15px 0 10px;
    &:hover > p {
      color: var(--color-enabled);
    }
  }

  > li > a {
    display: block;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 18px;
    height: 20px;
    margin: 0px auto;
  }

  > li > p {
    margin-top: 5px;
    font: 10px/1 'Spoqa Han Sans Neo';
    text-align: center;
  }
`;
const GoHome = styled.li`
  &:hover > a {
    background-image: url(${IconHomeHover});
  }
`;
const GoChat = styled.li`
  &:hover > a {
    background-image: url(${IconChatHover});
  }
`;
const GoUpload = styled.li``;
const GoMyprofile = styled.li`
  &:hover > a {
    background-image: url(${IconMyprofileHover});
  }
`;

const GoHomeIcon = styled.a`
  background-image: url(${IconHome});
`;
const GoChatIcon = styled.a`
  background-image: url(${IconChat});
  &:hover {
    background-image: url(${IconChatHover});
  }
`;
const GoUploadIcon = styled.a`
  background-image: url(${IconUpload});
`;
const GoMyprofileIcon = styled.a`
  background-image: url(${IconMyprofile});
  &:hover {
    background-image: url(${IconMyprofileHover});
  }
`;

export default function TabMenu() {
  return (
    <Footer>
      <GoHome>
        <GoHomeIcon />
        <p>홈</p>
      </GoHome>
      <GoChat>
        <GoChatIcon />
        <p>채팅</p>
      </GoChat>
      <GoUpload>
        <GoUploadIcon />
        <p>게시물 작성</p>
      </GoUpload>
      <GoMyprofile>
        <GoMyprofileIcon />
        <p>프로필</p>
      </GoMyprofile>
    </Footer>
  );
}
