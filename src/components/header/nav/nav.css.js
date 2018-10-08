import styled from 'styled-components';

export const Container = styled.nav`
  flex: 1;
  text-align: right;

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    justify-content: flex-end;

    li {
      text-transform: uppercase;
      font-size: 1.3rem;

      & + li {
        margin-left: 2rem;
      }
    }
  }
`;
