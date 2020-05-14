import React, { useContext } from "react";
import Context from "../../store/context";
import * as Styled from "./Display.styles";

function Display() {
  const { state } = useContext(Context);

  return (
    <>
      <Styled.InputDisplay value={state.input} readOnly />
      <Styled.AnsWrapper>
        <p>{state.ans}</p> <span>{state.errorMsg}</span>
      </Styled.AnsWrapper>
    </>
  );
}

export default Display;
