import ProjectList from "../portfolio-components/ProjectList";
import {motion} from "framer-motion";
export default function PortfolioPage({language}) {

    return (
        <motion.main
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <ProjectList language={language}/>
        </motion.main>
    );
}
