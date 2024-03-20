import React from 'react';

import style from './Home.module.css';
import { ListPerson } from './ListPerson';

export function Home() {
  return (
    <div className={style.content_home}>
        <ListPerson/>
    </div>
  )
}
