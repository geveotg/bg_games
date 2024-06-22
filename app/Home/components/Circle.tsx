"use client"

import { FC, useState } from 'react'
import style from '../style/circle.module.css'
import Link from 'next/link';

const Circle: FC = () => {

    const [modal, setModal] = useState(false);
    const [click, setClick] = useState(0);

    return (
        <div className={style["circle"]}>
            <div className={`${style["information"]} ${modal && style["open"]}`}>
                <div className={style["read"]}>
                    <p>Прочтите!</p>
                    <Link className={style["link"]} href={"https://bugigames.com/privacy-policy"}>Политика конфиденциальности</Link>
                </div>
                <div className={style["contact"]}>
                    <p>Свяжитесь с нами!</p>
                    <Link className={style["link"]} href={"mailto:bugigamessocials@gmail.com"}>bugigamessocials@gmail.com</Link>
                </div>
            </div>
            <img onClick={
                () => {
                    setClick(click + 1);
                    if (click == 1) {
                        setModal(true)
                    }else if(click > 1) {
                        setModal(false)
                        setClick(click - 1)
                    }
                }
            } src="https://play-lh.googleusercontent.com/3UHZTSB6fs0hpjsPOnTJpY6b4uLxhQJPPeLt3RSCxnSD39FMeifwM_fzlNg2yg30Ljs=s94-rw" alt="" />
        </div>
    )
}

export default Circle;
