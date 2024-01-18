import React from 'react'
import { Upside } from './Upside'

import style from './Home.module.css'
import { ListPerson } from './ListPerson'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div className={style.content_home}>
        <ListPerson/>
    </div>
  )
}
