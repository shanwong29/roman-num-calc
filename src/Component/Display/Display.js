import React, { useContext } from "react";
import Context from "../../store/context";
import * as Styled from "./Display.styles";

function Display() {
  const { state } = useContext(Context);

  return (
    <>
      <Styled.InputDisplay>{state.input}</Styled.InputDisplay>
      <Styled.AnsDisplay>
        {state.ans} {`err ${state.errorMsg}`}
      </Styled.AnsDisplay>
    </>
  );
}

export default Display;
