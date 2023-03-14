import React from 'react';
import { Oval } from 'react-loader-spinner';

export function Loader () {
  return (
    <>
     <div style={{position: 'fixed', top: 0, width: '100%', height: '100%', background: 'rgba(0,0,0, 0.5)', zIndex:'300'}}>

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

    </div>
     </>
  );
};
