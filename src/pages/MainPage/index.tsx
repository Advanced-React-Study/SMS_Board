import React from 'react';
import { Link, Nav } from '../../components';
import List from './List';
import { ContentWrap, Layout } from './style';

function MainPage() {
  return (
    <Layout>
      <Nav />
      <ContentWrap>
        <Link to={'/board/form'} variant={'outlined'} hover>글쓰기</Link>
        {/* 자식이 리렌더링될 때 부모는 리렌더링 되지 않기 때문에 데이터 사용이 필요한 리스트를 컴포넌트로 분리 */}
        <List />
      </ContentWrap>
    </Layout>
  );
}

export default MainPage;
