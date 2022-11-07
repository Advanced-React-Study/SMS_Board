import instance, { CoreResponse } from "./instance";

interface BoardRequest {
  title: string;
  content: string;
}

interface BoardResponse {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

interface GetBoardsAPIResponse extends CoreResponse {
  boards: BoardResponse[];
}

export const getBoardsAPI = async () => {
  const response = await instance<GetBoardsAPIResponse>({
    method: "GET",
    url: "/board",
  });

  const boards = response.data.boards.map((board) => ({
    ...board,
    createdAt: new Date(board.createdAt),
    updatedAt: new Date(board.updatedAt),
  }));

  return {
    ...response,
    data: {
      ...response.data,
      boards,
    },
  };
};

interface GetBoardAPIResponse extends CoreResponse {
  board: BoardResponse;
}

export const getBoardAPI = async (id: string) => {
  const response = await instance<GetBoardAPIResponse>({
    method: "GET",
    url: `/board/${id}`,
  });
  const board = {
    ...response.data.board,
    createdAt: new Date(response.data.board.createdAt),
    updatedAt: new Date(response.data.board.updatedAt),
  }
  return {
    ...response,
    data: {
      ...response.data,
      board,
    },
  };
};

export const postBoardAPI = (board: BoardRequest) => instance({
  method: "POST",
  url: "/board",
  data: {
    title: board.title,
    content: board.content,
  },
});

export const putBoardAPI = (id: string, board: Partial<BoardRequest>) => instance({
  method: "PUT",
  url: `/board/${id}`,
  data: {
    title: board.title,
    content: board.content,
  }
});

export const deleteBoardAPI = (id: string) => instance({
  method: "DELETE",
  url: `/board/${id}`,
});
