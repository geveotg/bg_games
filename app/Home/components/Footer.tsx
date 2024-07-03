import Link from "next/link";
import { FC } from "react";
import style from "../style/footer.module.css";

const Footer: FC = () => {
    return (
        <div className={style["footer"]}>
            <div className={style["contact"]}>
                <p> Read it!</p>
                <Link className={style["link"]} href={"https://bugigames.com/privacy-policy"}>
                    Privacy Policy
                </Link>
            </div>
            <div className={style["contact"]}>
                <p>Contact us!</p>
                <Link className={style["link"]} href={"mailto:bugigamessocials@gmail.com"}>
                    bugigamessocials@gmail.com
                </Link>
            </div>
        </div>
    );
};

export default Footer;
