import React, { forwardRef, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import { colors } from "../../lib/constants/colors";

const List = forwardRef((props, ref) => {
  const navigate = useNavigate();

  return (
    <div>
      <StContainer>
        <StBox ref={ref} onClick={() => {
          navigate(`/posts/${props.post.id}`);
        }}>
          <p style={{ color: colors.orange }}>
            {props.post.title}
          </p>
          <p style={{ marginLeft: "50px", color: colors.red, marginTop: "5px" }}>
            {props.post.writer}
          </p>
        </StBox>
      </StContainer>
    </div >
  );
});

export default List;

const StContainer = styled.div`
    padding: 5px;
    
`;

const StBox = styled.div`
    background-color: #FAF6BF;
    border-radius: 3px;
    padding : 5px;
    display: flex;
    justify-content: space-between;
`;
