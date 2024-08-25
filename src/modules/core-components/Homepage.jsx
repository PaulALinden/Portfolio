import BioArticle from '../home-components/AboutMeArticle';
import ProfileCardWithCV from '../home-components/ProfileCardWithCV';
import SocialMediaBar from '../small-assets/SocialMediaBar';
import {motion} from "framer-motion";

export default function Main({language}) {

    const mainClassName =
        "p-4 w-11/12 flex flex-col lg:flex-row space-y-6 space-x-6 w-svw";

    return (
        <motion.main
            id="main"
            className={mainClassName}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <BioArticle language={language}/>

            <ProfileCardWithCV language={language}/>

            <SocialMediaBar/>

        </motion.main>
    );
}