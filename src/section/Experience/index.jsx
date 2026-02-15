import { faGit, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import picExp1 from '../../assets/Expic1.png'
import picExp2 from '../../assets/Expic2.png'
import { useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import FormattedDate from "../../components/FomattedDate";
import Picture from "../../components/Picture";
import TitleLink from "../../components/TitleLink";
import Material from "../../components/Material";
import Description from "../../components/Description";
import Tech from "../../components/Tech";


const Experience = () => {
    const [isMouseEnter, setIsMouseEnter] = useState(false);

    return (
        <div className="">
            <div className="text-primaryAccent font-medium">Experience</div>
            <div className={`grid grid-cols-[25%_75%]  rounded px-2 py-6 transition-all ${isMouseEnter['exp1'] ? "bg-gray-200" : ""}`}
                onMouseEnter={() => setIsMouseEnter({ 'exp1': true })}
                onMouseLeave={() => setIsMouseEnter({ 'exp1': false })}
            >
                <div>
                    <FormattedDate isHighlight={isMouseEnter['exp1']}>2024-202</FormattedDate>
                    <Picture picture={picExp1} title="Fullstack" />
                </div>
                <div className="grid gap-y-4">
                    <TitleLink isHighlight={isMouseEnter['exp1']} title="Fullstack" link="https://github.com/nutchaboony-web/react202" />
                    <div className="flex gap-4 text-xl" >
                        <Material icon={faGithub} link="https://github.com/nutchaboony-web/react202" />
                        <Material icon={faYoutube} link="https://www.youtube.com/@NutchaBOONYAKAMA" />
                    </div>
                    <Description description="Designing and developing a sports data analysis system that scrapes data from various sports websites, processes it, and presents different profit-making possibilities in real-time for customers." />
                    
                    <div >
                       <Tech isHighlight={isMouseEnter['exp1']} data={['React', 'Next']} />
                    </div>
                </div>
            </div>
            <div className="text-primaryAccent font-medium">Experience</div>
            <div className={`grid grid-cols-[25%_75%]  rounded px-2 py-6 transition-all ${isMouseEnter['exp2'] ? "bg-gray-200" : ""}`}
                onMouseEnter={() => setIsMouseEnter({ 'exp2': true })}
                onMouseLeave={() => setIsMouseEnter({ 'exp2': false })}
            >
                <div>
                    <FormattedDate isHighlight={isMouseEnter['exp2']}>2024-202</FormattedDate>
                    <Picture picture={picExp2} title="Fullstack" />
                </div>
                <div className="grid gap-y-4">
                    <TitleLink isHighlight={isMouseEnter['exp2']} title="Fullstack" link="https://github.com/nutchaboony-web/react202" />
                    <div className="flex gap-4 text-xl" >
                        <Material icon={faGithub} link="https://github.com/nutchaboony-web/react202" />
                        <Material icon={faYoutube} link="https://www.youtube.com/@NutchaBOONYAKAMA" />
                    </div>
                    <Description description="Designing and developing a sports data analysis system that scrapes data from various sports websites, processes it, and presents different profit-making possibilities in real-time for customers." />
                    
                    <div >
                       <Tech isHighlight={isMouseEnter['exp2']} data={['React', 'Next']} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;