"use client";

import Link from "next/link";
import { FC, useState } from "react";
import style from "../style/section.module.css";
import { game } from "./games";

const Section: FC = () => {
    const [button, setButton] = useState(false);
    const [click, setClick] = useState(0);

    const gamelist = game.map((el, i) => {
        return (
            <div className={style["g-list"]} key={i}>
                <div className={style["img-parent"]}>
                    <img className={style["img"]} src={el.img} alt="" />
                </div>
                <div className={style["text"]}>
                    <div className={style["title"]}>{el.title}</div>
                    <div className={style["desc"]}>{el.desc}</div>
                    <button
                        onClick={() => {
                            setClick(click + 1);
                            if (click == 1) {
                                setButton(true);
                            } else if (click > 1) {
                                setButton(false);
                                setClick(click - 1);
                            }
                        }}
                        className={style["btn"]}
                    >
                        <Link className={style["link"]} target={"_blank"} href={el.link}>
                            Down-load a game
                        </Link>
                    </button>
                </div>
            </div>
        );
    });
    return (
        <div className={style["game-list"]}>
            <div className={style["list"]}>{gamelist}</div>
        </div>
    );
};

export default Section;
