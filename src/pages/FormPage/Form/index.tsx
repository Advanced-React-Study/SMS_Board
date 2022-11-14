import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBoardAPI, postBoardAPI, putBoardAPI } from '../../../api/board';
import { Button, InputForm, TextAreaForm } from '../../../components';
import { FormLayout } from './style';

const useForm = (id?: string) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const onChangeTitle = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setTitle(value);
  }, [setTitle]);

  const onChangeContent = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.currentTarget;
    setContent(value);
  }, [setContent]);

  const getBoard = async (id: string) => {
    const response = await getBoardAPI(id);
    setTitle(response.data.board.title);
    setContent(response.data.board.content);
  }

  const submit = async () => {
    if (!id) {
      await postBoardAPI({
        title,
        content,
      });
    } else {
      await putBoardAPI(id, {
        title,
        content,
      });
    }

    navigate('/');
  }

  useEffect(() => {
    if (!id) return;

    void getBoard(id);
  }, []);
  
  return {
    state: {
      title,
      content,
    },
    operator: {
      onChangeTitle,
      onChangeContent,
      submit,
    },
  };
}

interface Props {
  id?: string;
}

const Form = (props: Props) => {
  const { id } = props;
  const { state, operator } = useForm(id);

  return (
    <FormLayout>
      <InputForm label={'제목'} value={state.title} onChange={operator.onChangeTitle} />
      <TextAreaForm label={'내용'} value={state.content} onChange={operator.onChangeContent} />
      <Button onClick={operator.submit} hover>{id ? '수정' : '등록'}</Button>
    </FormLayout>
  );
}

export default Form;
