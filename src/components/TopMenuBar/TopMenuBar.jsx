import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button/Button';

import LeftArrow from '../../assets/icon/icon-arrow-left.png';
import Search from '../../assets/icon/icon-search.png';
import MoreButton from '../Button/MoreButton';

export default function TopMenuBar({
  saveButton,
  uploadButton,
  moreButton,
  moreButtonSmall,
  menuText,
  className,
  isEmpty,
  onClick,
  homeText,
  searchBtn,
  display
}) {
  const history = useHistory();

  return (
    <Container>
      <PreviousBtn onClick={() => history.goBack()}
        display={display}>
        <PrevioudBtnImg
          src={LeftArrow}
          alt="이전 페이지로 돌아가는 버튼 이미지"
        />
      </PreviousBtn>
      <SearchModal>
        <label htmlFor="search_tit" className="ir">검색창입니다</label>
        <input id="search_tit" type="text" required placeholder='계정 검색' />
      </SearchModal>
      <MenuText>{menuText}</MenuText>
      <HomeText>{homeText}</HomeText>
      {saveButton ? (
        <Button
          buttonText="저장"
          size="medium-small"
          isEmpty={isEmpty}
          onClick={onClick}
        />
      ) : null}
      {uploadButton ? (
        <Button
          buttonText="업로드"
          size="medium-small"
          isEmpty={isEmpty}
          onClick={onClick}
        />
      ) : null}
      {moreButton ? <MoreButton size="large" /> : null}
      {moreButtonSmall ? <MoreButton size="small" /> : null}
      {searchBtn ? <SearchButton src={Search} /> : null}
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
  padding: 8px 20px;
`;

const PreviousBtn = styled.button`
  width: 22px;
  border: none;
  display: ${(props) => props.display === 'none' ? 'none' : props.display === 'block' ? 'block' : null};
`;

const PrevioudBtnImg = styled.img`
  vertical-align: -4px;
  padding: 5px 0;
`;

const MenuText = styled.h1`
  margin-right: auto;
  padding-left: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

const HomeText = styled.h1`
  padding-left: 5px;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  order: -1;
`;

const SearchButton = styled.img`
  margin-left: auto;
`;

const SearchModal = styled.fieldset`
  margin-left:25px;
  width:100%;
  >input {
    background-color:#F2F2F2;
    border:none;
    border-radius:32px;
    width:100%;
    padding:8px 16px;
    box-sizing: border-box;
    font:14px/14px "Spoqa Han Sans Neo"; 
    color:#C4C4C4;
    letter-spacing: 0em;   
  }
`