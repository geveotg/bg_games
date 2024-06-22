import { FC } from "react";
import style from "../style/markets.module.css";
import Link from "next/link";

const Markets: FC = () => {
    return (
        <div className={style["parent"]}>
            <div className={style["back"]}>
                <div className={style["market"]}>
                    <img
                        src="https://bugigames.com/img/android.png"
                        alt=""
                        className={style["icon"]}
                    />{" "}
                    <Link
                        target={"_blank"}
                        href={"https://play.google.com/store/apps/dev?id=7604975758676612821"}
                        className={style["link"]}
                    >
                        Google Play Market(Android)
                    </Link>
                </div>
                <div className={style["market"]}>
                    <img
                        src="https://bugigames.com/img/appStore.png"
                        alt=""
                        className={style["icon"]}
                    />{" "}
                    <Link
                        target={"_blank"}
                        href={"https://apps.apple.com/am/developer/eduard-malkhasyan/id1689937136"}
                        className={style["link"]}
                    >
                        iOs App Store(Iphone)
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Markets;
