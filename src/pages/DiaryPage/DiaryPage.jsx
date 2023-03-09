import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';

import { DiaryProductsList } from 'components/DiaryProductsList/DiaryProductsList';
import React from 'react';

export default function DiaryPage() {
  return (
    <div>
      {/* <DiaryDateCalendar /> */}
      <DiaryAddProductForm />
      <DiaryProductsList />
    </div>
  );
}
