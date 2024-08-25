import {
    DiAndroid,
    DiGit,
    DiGithubBadge,
    DiHtml5,
    DiJava,
    DiJsBadge,
    DiMysql,
    DiReact,
    DiCss3
} from "react-icons/di";
import {
    BiLogoFirebase,
    BiLogoSpringBoot
} from "react-icons/bi";

export default function TechStackCard() {
    const icons = [
        DiJava,
        BiLogoSpringBoot,
        DiJsBadge,
        DiReact,
        DiHtml5,
        DiCss3,
        DiAndroid,
        DiMysql,
        BiLogoFirebase,
        DiGit,
        DiGithubBadge
    ]

    return (
        <div className={"flex space-x-2"}>

            {icons.map((Icon, index) => (
                <Icon key={index} className={"size-6"}/>
            ))}

        </div>

    );
};



