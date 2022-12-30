import React, { useEffect, useState } from 'react';
import st from 'styles/components/Notification.module.scss';

import IconClose from 'lib/icons/close';

export default function ({children}) {
  const [mode, setMode] = useState<boolean>(false);

  function toggleWin () {
    setMode(mode ? false : true);
  }

  useEffect(() => {
    toggleWin()
  },[])

  return (
    <div className={`${st.Notification} ${mode ? st.active : "" }`}>
      <div className={st.topPanel}>
        <IconClose onClick={toggleWin}/>
      </div>
      <div className={st.container}>
        <p>
          {children}
        </p>
      </div>
    </div>
  )
}