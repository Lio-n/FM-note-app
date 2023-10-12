import styled from "styled-components";
import { CheckIcon } from "../../atoms/icons/check.icon";

const Root = styled.div`
  height: 2rem;
  width: 2rem;

  background: ${({ theme }) => theme.border_color};
  border-radius: 50%;
  padding: 2px;

  position: relative;

  .circleButton {
    border-radius: 50%;
    border: none;
    width: 85%;
    height: 85%;
    cursor: pointer;

    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;

    display: inline-block;
    background: ${({ theme }) => theme.layout_color};
  }

  &:hover {
    background: linear-gradient(45deg, var(--clr-sky-blue), var(--clr-pink));
  }

  &.completed {
    background: linear-gradient(45deg, var(--clr-sky-blue), var(--clr-pink));

    .circleButton {
      background: transparent;
    }
  }
`;

interface CheckButtonProps {
  isCompleted: boolean;
  ariaLabel?: string;
  onClick?: (any: unknown) => unknown;
}

export const CheckButton = ({ isCompleted = false, onClick, ariaLabel = `check button` }: CheckButtonProps) => (
  <Root id="CheckButton"  className={`${isCompleted && "completed"}`}>
    <button aria-label={ariaLabel} onClick={onClick} className="circleButton">
      {isCompleted && <CheckIcon />}
    </button>
  </Root>
);
