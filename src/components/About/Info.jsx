import { About } from "../../data/AboutData.jsx";

const Info = () => {

    const data = About;

    return (
        <div className="about__info grid">
            {data.map((item, index) => {
                return (
                    <div className="about__box" key={index}>
                        <i className={`bx bx-${item.icon} about__icon`}></i>
                        <h3 className="about__title">{item.title}</h3>
                        <span className="about__subtitle">{item.subtitle}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Info;