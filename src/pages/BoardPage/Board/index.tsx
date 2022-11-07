import React, { useEffect, useState } from 'react';
import { getBoardAPI } from '../../../api/board';
import { Title, Typography } from '../../../components';
import { Board as BoardType } from '../../../stores/atom';
import { BoardInfoWrap, BoardLayout } from './style';

const useBoard = (id: string) => {
  const [board, setBoard] = useState<BoardType>({
    id: '',
    title: '',
    content: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  const getBoard = async (id: string) => {
    const response = await getBoardAPI(id);
    setBoard(response.data.board);
  }

  useEffect(() => {
    void getBoard(id);
  }, []);

  return {
    state: {
      board,
    }
  }
}

interface Props {
  id: string;
}

const Board = (props: Props) => {
  const { id } = props;
  const { state } = useBoard(id);

  return (
    <BoardLayout>
      <Title sz={'xxl'} bold>{state.board.title}</Title>
      <BoardInfoWrap>
        <Typography>생성일: {state.board.createdAt.toDateString()}</Typography>
      </BoardInfoWrap>
      <Typography>{state.board.content}</Typography>
    </BoardLayout>
  );
}

export default Board;
