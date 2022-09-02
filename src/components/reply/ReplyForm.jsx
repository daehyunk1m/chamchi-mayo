import { useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";

import { colors } from "../../lib/constants/colors";
import CommonButton from "../common/button/CommonButton";

const ReplyForm = (props) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [body, setBody] = useState('');
  const postId = props.postId;
  const handleChangeInput = (e, setState) => setState(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const URL = 'http://localhost:5001/replies';
    const data = {
      postId,
      name,
      password,
      body,
      id: props.replies.length + 1
    };
    
    await axios.post(URL, data);
    
    props.setReplies(props.replies.concat(data));
    setName('');
    setPassword('');
    setBody('');
  };

  return (
    <form 
      className="reply-form"
      onSubmit={handleSubmit}>
      <Form>
        <InputContainer>
          <Input
            value={name} 
            onChange={(e) => handleChangeInput(e, setName)}
            placeholder="닉네임"
            type="text" />
          <Input
            value={password} 
            onChange={(e) => handleChangeInput(e, setPassword)}
            placeholder="비밀번호"
            type="password" />
        </InputContainer>
        <Textarea
          value={body}
          onChange={(e) => handleChangeInput(e, setBody)}
          placeholder="댓글을 작성하세요"/>
        <CommonButton
          type="submit"
          color={colors.white}
          backgroundColor={colors.blue}>
          <div>작성</div>
        </CommonButton>
      </Form>      
    </form>
  );
};

const Form = styled.div`
  display: flex;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 95%;
  border-radius: 8px;
  border-color: whitesmoke;
  background-color: ${colors.ivory};
`;

const Textarea = styled.textarea`
  width: 80%;
  resize: none;
  border-radius: 8px;
  border-color: whitesmoke;
  background-color: ${colors.ivory};
`;

export default ReplyForm;