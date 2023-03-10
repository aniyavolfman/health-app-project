import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import RightSideBar from 'components/RightSideBar/RightSideBar';
import css from './DiaryPage.module.scss'

import React from 'react';

export default function DiaryPage() {
  return (
    <div
      className={css.diaryPage}
    >
      <DiaryAddProductForm />
      <RightSideBar />
    </div>
  );
}
