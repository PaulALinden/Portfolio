import {SiBookstack} from 'react-icons/si';
import websiteLinks from '../../data/websiteLinks.js'
import profileImg from '../../media/profile.png';
export default function ProfileCardWithCV({language}) {
    const selectedContent = websiteLinks.cv[language];

    return (
        <section
            id="profil"
            className="text-white bg-gray-700 w-60 max-w-fit order-1 md:w-80 lg:w-96 relative rounded-t-full lg:order-2">

            <img
                src={profileImg}
                alt="Profile Picture"
                decoding={"sync"}
            />

            <a
                href={selectedContent}
                target="_blank"
                className="bg-[#374151] border-2 border-slate-400 dark:border-white rounded-l-lg p-2 absolute bottom-0
                left-0 flex justify-center items-center space-x-1 h-12 w-16 text-center"
            >
                <p className="mt-6 mb-2">cv</p>
                <SiBookstack className="text-2xl"/>
            </a>
        </section>
    );
}


