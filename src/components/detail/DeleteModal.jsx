import { useState, useRef, useEffect } from "react";
import axios from "axios";

import useOnClickOutside from "../../hooks/useOnClickOutside";
import Modal from "./Modal";
import { colors } from "../../lib/constants/colors";
import CommonButton from "../common/button/CommonButton";
import {
  TitleWrapper,
  ButtonWrapper,
  StyledInput,
} from "./DetailStyle";

const DeleteModal = (props) => {
  const passwordRef = useRef();
  const [password, setPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState({});

  const handleClickDelete = async () => {
    const isPasswordMatched = password === props.post.password;
    const URL = `${props.post.id}`;

    if (isPasswordMatched) {
      const response = await axios.delete(URL, { crossdomain: true });
      window.location.href = '/';
    } else {
      setErrorMessages({
        message: "비밀번호가 일치하지않습니다.",
      });
    }
  };

  const renderErrorMessage = () => {
    return (errorMessages && (
      <strong style={ { color: colors.red } }>
        {errorMessages.message}
      </strong>
    ));
  };

  const handleClickOutSide = () => props.setIsClickDeleteIcon(false);
  const handleChangePassword = (e) => setPassword(e.target.value);

  useOnClickOutside(props.modalRef, handleClickOutSide);

  useEffect(() => {
    passwordRef.current.focus();
  });

  return (
    <Modal ref={props.modalRef}>
      <p>비밀번호를 입력하세요.</p>
      <TitleWrapper backgroundColor={colors.ivory}>
        <StyledInput
          ref={passwordRef} 
          type="password"
          placeholder="비밀번호" 
          onChange={handleChangePassword}
          backgroundColor={colors.ivory}/>
      </TitleWrapper>
      {renderErrorMessage()}          
      <ButtonWrapper>
        <CommonButton 
          type="button"
          backgroundColor={colors.white} 
          bodyColor={colors.red}>
          <div onClick={handleClickDelete}>삭제하기</div>
        </CommonButton>
      </ButtonWrapper>
    </Modal>
  );
};

export default DeleteModal;