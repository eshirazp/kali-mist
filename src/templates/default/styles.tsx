import styled from "styled-components";

export const AppHeader = styled.div`
  height: 70px;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  color: #fff;

  img {
    width: 110px;
    height: 25px;
  }
`;

/* Elush- I removed the margin-bottom to create a footer instead. Also gave
 * a `background-color` for aesthetics.
 */
export const AppWrapper = styled.div`
  text-align: center;
  background-color: #f2f5f5;
`;

export const AppContent = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 10px auto;
  min-height: calc(100vh - 110px);
`;

/* Elush- I created an AppFooter just so it looks a bit better */
export const AppFooter = styled.div`
  height: 20px;
  background-color: #00cdbe;
  color: #fff;
`;
