import { socialiconData } from "../../data/SocialIconData.jsx";

const Social = () => {
    const data = socialiconData;
    return (
        <div className="home__social">
            {data.map((item, index) => {
                return (
                    <a href={item.link} className="home__social-icon" target={"_blank"} key={index}>
                        <i className={`uil uil-${item.icon}`}></i>
                    </a>
                )
            })}
        </div>
    )
}

export default Social;