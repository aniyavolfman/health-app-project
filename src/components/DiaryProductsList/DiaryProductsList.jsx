import DiaryProductsListItem from 'components/DiaryProductsListItem/DiaryProductsListItem';
import React from 'react'

export function DiaryProductsList () {
  return (
    <div>
      DiaryProductsList
      <ul >
        {/* {"filterContacts".map(({ id, name, number }) => (
          <DiaryProductsListItem />
        ))} */}
      </ul>
    </div>
  );
}

//<DiaryProductsListItem key={id} name={name} number={number} btnId={id} />;
// {title}: <span>{weight} </span> <span>{kcal} </span>

// day delete

// приклад тіла запиту  {
//   "dayId": "507f1f77bcf86cd799439011",
//   "eatenProductId": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d"
// }

// export async function dayDelete(credentials) {
//   try {
//     const { data } = await axios.delete('/day', credentials);
//     return data;
//   } catch (error) {
//     Notify.failure(error.message);
//   }
// }

//<DiaryProductsListItem key={id} name={name} number={number} btnId={id} />;

