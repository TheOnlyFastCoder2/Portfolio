
// import FingerprintJS from '@fingerprintjs/fingerprintjs'
import React, {useContext, useRef, useState } from 'react';
import Router from 'next/router';

import st from 'styles/components/Chat.module.scss';

import SVGSend from 'lib/icons/Send';
import SVGArrow from 'lib/icons/Arrow';

import Stars from 'lib/components/Stars';

import api from 'lib/api';
import { IReviews } from 'lib/api/IStore'
import { AppContext, TAppContext  } from 'lib/context/app'

export default function Chat () {
  const [store] = useContext<TAppContext>(AppContext);
  const [showSender, setShowSender] = useState(false);

  return (
    <div className={`${st.Chat}  ${showSender ? st.active : st.disable}`}>
      <Topbar setShowSender={setShowSender}/>
      <Sender/>
      <div className={st.boxComments}>
        {store.reviews.map((item: IReviews, i) => {
          return <Comment key={i} {...item}/>
        })}
      </div>
    </div>
  )
}



function Topbar({setShowSender}) {

  function addSender() {
    setShowSender(true);
  }

  function removeSender() {
    setShowSender(false);
  }


  return (
    <div className={`${st.topbar}`}>
      <button className={st.toWrite} onClick={addSender}>написать отзыв</button>
      <button className={st.toCancel} onClick={removeSender}>отменить</button>
    </div>
  )
}


export function Sender () {
  const [store] = useContext<TAppContext>(AppContext);

  const limitOfText = 700;


  const [errors , setErros] = useState([]);
  const [data , setData]  = useState<IReviews>({
    name: "",
    text: "",
    typeTask: "",
    score: 0,
  });


  function handleScore(rangeTo: number) {
    setData({...data, score: rangeTo})
  }

  function handleText ({currentTarget}: React.ChangeEvent<HTMLDivElement> & React.KeyboardEvent<HTMLDivElement>) {
    setData({...data, text: currentTarget.textContent})
  }

  function handleName({target}: React.ChangeEvent<HTMLInputElement>) {
    setData({...data, name: target.value})
  }

  function handleTypeTask(value: string) {
    setData({...data, typeTask: value})
  }
  
  function sendReviews() {
    const errors = [];

    if(data.score === 0) {
      errors.push(["оценка","добавьте оценку"])
    }
    if (data.text.trim().length < 40 || data.text.trim().length > limitOfText) {
      errors.push(["отзыв","текст должен содержать 40-700 символов"])
    }
    if (data.name.trim().length === 0) {
      errors.push(["имя","введите свое имя"])
    }

    if (data.typeTask.trim().length === 0) {
      errors.push(["тип задания","выберите тип"])
    }

    setErros(errors)
    if(errors.length === 0) {
      store.reviews.push(data);
      api.updateStore(store).then(() => {
        Router.reload();
      });
    }
  }
  
  return (
    <div className={st.sender}>
      <div className={st.container}>
        <div className={st.initBox}>
          <div className={st.container}>
            <Stars rangeTo={0} callback={handleScore}/>
          </div>
          <div className={st.container}>
            <input onChange={handleName} type="text" placeholder='имя'/>
            <DropDown items={['ux/ui дизайн', 'Frontend разработка']} callback={handleTypeTask}/>
          </div>
        </div>
        <div className={st.sendBox}>
          <div className={st.counterText}>
            <span>Количество символов: {data.text.length+"/"+limitOfText}</span>
          </div>
          <div onKeyDown={handleText} className={st.textarea} contentEditable={true} placeholder='комментарий'>
          </div>
          <button onClick={sendReviews}><SVGSend/></button>
        </div>
        <li className={st.errors}>
          {errors.map(([type, text], i) => {
            return  <li key={i}><span>Error {type}</span>: {text}</li>
          })}
        </li>
      </div>
    </div>
  )
}

interface IDropDown {
  items: Array<string>
  callback: (value:string) => void
}

function DropDown ({items, callback}:IDropDown) {
  const refDetails = useRef<HTMLDetailsElement>(null);
  const [currItem, setCurrItem] = useState<String>("");

  function setItem({currentTarget}: React.MouseEvent<HTMLElement>) {
    setCurrItem(currentTarget.textContent);
    callback(currentTarget.textContent)
    refDetails.current.open = false;
  }

  return (
    <details ref={refDetails} className={currItem ? st.active : null}>
      <summary className='unselectable'>
        <span>
          {currItem || "тип задания"}
        </span>
        <SVGArrow/>
      </summary>
      <ul>
        {items.map((text, key) => {
          return <li onClick={setItem} key={key}>{text}</li>
        })}
      </ul>
    </details>
  )
}

function Comment (props: IReviews) {
  return (
    <div className={st.comment}>
      <div className={st.topbar}>
        <h4><span title={props.name}>{props.name}</span> {props.typeTask}</h4>
        <div className={st.container}>
          <Stars rangeTo={props.score}/>
        </div>
      </div>
      <p>
       {props.text}
      </p>
    </div>
  )
}

