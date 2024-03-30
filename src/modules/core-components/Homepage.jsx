import LanguageSelector from '../home-components/LanguageSelector';
import BioArticle from '../home-components/AboutMeArticle';
import ProfileCardWithCV from '../home-components/ProfileCardWithCV';
import SocialMediaBar from '../small-assets/SocialMediaBar';
import {motion} from "framer-motion";

export default function Main({language, handleLanguageChange}) {

    return (
        <motion.main
            id="main"
            className="p-4 flex flex-col lg:flex-row space-y-6 space-x-6 "
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <LanguageSelector handleLanguageChange={handleLanguageChange}/>

            <BioArticle language={language}/>

            <ProfileCardWithCV language={language}/>

            <SocialMediaBar/>

        </motion.main>
    );
}