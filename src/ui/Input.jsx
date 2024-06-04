import React from "react";
import styled from "styled-components";

const Input = React.memo(styled.input`
  border: 1px solid var(--color-slate-300);
  background-color: var(--color-slate-50);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
`);

export default Input;
