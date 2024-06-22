import { FC } from "react";
import style from "../style/header.module.css";
import Markets from "./Markets";

const Header: FC = () => {
    return (
        <div className={style["back"]}>
            <div className={style["title"]}>Bugi Games</div>
            <Markets />
        </div>
    );
};

export default Header;
