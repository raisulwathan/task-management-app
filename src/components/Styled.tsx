import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 30px auto;
  padding: 0 20px;
`;

export const Title = styled.h2`
  text-align: center;
  color: #333;
`;

export const SectionTitle = styled.h3`
  margin-top: 30px;
  color: #555;
`;

export const TaskList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const TaskItem = styled.li`
  margin-bottom: 10px;
  background: #f9f9f9;
  padding: 10px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TaskText = styled.span<{ done?: boolean }>`
  text-decoration: ${({ done }) => (done ? "line-through" : "none")};
  color: ${({ done }) => (done ? "#aaa" : "#333")};
`;
