import styled from "styled-components";

export const Page = styled.body`
  background: #ff5043;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: auto;
  min-height: 100vh;
`;

export const PageContainer = styled.main`
  display: flex;
  max-width: calc(80vw - 8rem);
  border-radius: 2rem;
  padding: 4rem 4rem;
  background-color: white;
  margin: 4rem auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
`;

export const InfoAside = styled.aside`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 2;
  gap: 1rem;
`;

export const TitleContainer = styled.section`
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Subtitle = styled.p`
  font-weight: 900;
  font-size: 3.5rem;
  line-height: 4rem;

  @media (max-width: 840px) {
    font-size: 3rem;
    line-height: 3.75rem;
  }

  @media (max-width: 440px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }
`;

export const Label = styled.p`
  font-weight: 600;
`;

export const Button = styled.button`
  background: #ff5043;
  color: white;
  padding: 0.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color ease-in 0.2s;

  &:hover {
    background-color: rgba(255, 80, 67, 0.75);
  }
`;

export const SearchContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 1rem;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.75rem;
`;

export const SearchInput = styled.input`
  padding: calc(0.75rem - 1px);
  border-radius: 0.5rem;
  border: 1px solid lightgray;
`;

export const ResultContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`;
