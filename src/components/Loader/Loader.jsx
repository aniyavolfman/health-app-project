import React from 'react';
import { Oval } from 'react-loader-spinner';

export function Loader () {
  return (
    <>
      <Oval
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={8}
        strokeWidthSecondary={8}
      />
    </>
  );
};
