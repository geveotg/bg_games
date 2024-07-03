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
                    {/* <button className={style["btn"]}> */}
                    <div className={style["market_icons"]}>
                        <Link
                            className={`${style["download-button"]} ${style["android"]}`}
                            target={"_blank"}
                            href={el.link}
                        >
                            <img className={style["indroid_icon"]} src="/img/android.png" alt="" />
                            <span>Download for Android</span>
                        </Link>
                        {el.Iphone_Link && (
                            <Link
                                className={`${style["download-button"]} ${style["ios"]}`}
                                target={"_blank"}
                                href={el.link}
                            >
                                <img
                                    className={style["indroid_icon"]}
                                    src="/img/appStore.png"
                                    alt=""
                                />
                                <span>Download for iOS</span>
                            </Link>
                        )}
                    </div>
                    {/* </button> */}
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
