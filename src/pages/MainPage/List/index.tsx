import React, { MouseEvent, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { deleteBoardAPI, getBoardsAPI } from '../../../api/board';
import { Button, Link, Typography } from '../../../components';
import { BoardListAtom } from '../../../stores/atom';
import { ListHeaderWrap, ListItemWrap, ListLayout } from './style';

// useList와 List로 관심사 분리

const useList = () => {
  const [boardList, setBoardList] = useRecoilState(BoardListAtom);

  const deleteBoard = async (event: MouseEvent<HTMLButtonElement>, id: string) => {
    event.preventDefault();
    await deleteBoardAPI(id);
    await getBoards();
  }

  const getBoards = async () => {
    const response = await getBoardsAPI();
    setBoardList(response.data.boards);
  }

  useEffect(() => {
    void getBoards();
  }, []);

  return {
    state: {
      boardList,
    },
    operator: {
      deleteBoard,
    },
  }
}

const List = () => {
  const { state, operator } = useList();

  return (
    <ListLayout>
      <>
        <ListHeaderWrap>
          <Typography bold>제목</Typography>
          <Typography bold>생성일</Typography>
          <Typography bold>수정</Typography>
          <Typography bold>삭제</Typography>
        </ListHeaderWrap>
        {state.boardList.map((board, key) => (
          <ListItemWrap to={`/board/${board.id}`} key={key}>
            <Typography>{board.title}</Typography>
            <Typography>{board.createdAt.toDateString()}</Typography>
            <Link to={`/board/form/${board.id}`} variant={'text'}>수정</Link>
            <Button variant={'text'} onClick={(e) => operator.deleteBoard(e, board.id)}>삭제</Button>
          </ListItemWrap>
        ))}
      </>
    </ListLayout>
  );
}

export default List