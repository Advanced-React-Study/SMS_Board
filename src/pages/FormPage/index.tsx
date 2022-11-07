import React from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from '../../components';
import CreateForm from './Form';
import { ContentWrap, Layout } from './style';

interface Params extends Record<string, string | undefined> {
  id: string;
}

function FormPage() {
  const params = useParams<Params>();

  return (
    <Layout>
      <Nav />
      <ContentWrap>
        <CreateForm id={params.id} />
      </ContentWrap>
    </Layout>
  )
}

export default FormPage