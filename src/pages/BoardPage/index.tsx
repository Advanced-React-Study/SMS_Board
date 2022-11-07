import React from 'react'
import { useParams } from 'react-router-dom';
import { Nav } from '../../components'
import Board from './Board';
import { ContentWrap, Layout } from './style'

interface Params extends Record<string, string | undefined> {
  id: string;
}

function BoardPage() {
  const params = useParams<Params>();

  return (
    <Layout>
      <Nav />
      <ContentWrap>
        <Board id={params.id || ''} />
      </ContentWrap>
    </Layout>
  )
}

export default BoardPage