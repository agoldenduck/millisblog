import styled from 'styled-components';
import NavDiv from 'components/header/nav'

export const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 4rem;

  & span {
    flex: 1;
  }

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`;

export const SiteTitle = styled.div`
  flex-basis: content;
`;

// button {
//   display: flex;
//   align-items: center;
//   width: 100%;
// }
// .btnimg {
//   margin: 10px 0 10px 10px;
//   flex: 1;
//   text-align: left;
// }
// .space {

// }
