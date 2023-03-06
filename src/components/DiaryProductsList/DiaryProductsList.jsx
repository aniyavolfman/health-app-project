import DiaryProductsListItem from 'components/DiaryProductsListItem/DiaryProductsListItem';
import React from 'react'

export function DiaryProductsList () {
  return (
    <div>
      DiaryProductsList
      <ul >
        {"filterContacts".map(({ id, name, number }) => (
          <DiaryProductsListItem />
        ))}
      </ul>
    </div>
  );
}
//<DiaryProductsListItem key={id} name={name} number={number} btnId={id} />;