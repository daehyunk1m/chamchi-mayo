import styled from "@emotion/styled";
import axios from "axios";

import { colors } from "../../lib/constants/colors";
import CommonButton from "../common/button/CommonButton";

const ReplyList = (props) => {
  const handleClickDelete = async (id) => {
    const URL = `http://localhost:5001/replies/${id}`;
    const data = props.replies.filter(reply => reply.id === id);

    props.setReplies(props.replies.filter(reply => reply.id !== id));

    await axios.delete(URL);
  };

  return (
    <List>
      {props.replies && props.replies.map(reply => {
        return (
          <ReplyContainer key={reply.id} >
            <div style={ {backgroundColor: colors.ivory} }>닉네임: {reply.name}</div>
            <div style={ {backgroundColor: colors.ivory} }>내용: {reply.body}</div>
            <CommonButton backgroundColor={colors.blue}>
              <div onClick={() => handleClickDelete(reply.id)}>삭제</div>
            </CommonButton>
          </ReplyContainer>
        );
      })}
    </List>
  )
};

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ReplyContainer = styled.div`
  padding: 5px;
`;

export default ReplyList;