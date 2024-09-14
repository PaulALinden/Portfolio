import {SiBookstack} from 'react-icons/si';
import profileImg from '../../media/profile.webp';
export default function ProfileCardWithCV({language}) {

    const sectionStyle =
        "text-white bg-gray-700 w-60 max-w-fit order-1 " +
        "md:w-80 lg:w-96 relative rounded-t-full lg:order-2";
    const anchorStyle =
        "bg-[#374151] border-2 border-slate-400 dark:border-white " +
        "rounded-l-lg p-2 absolute bottom-0 left-0 " +
        "flex justify-center items-center space-x-1 h-12 w-16 text-center";

    return (
        <section
            id="profil"
            className={sectionStyle}>

            <img
                src={profileImg}
                alt="Profile Picture"
                decoding={"sync"}
            />

            <a
                href={"#cv"}
                className={anchorStyle}
            >
                <p className="mt-6 mb-2">cv</p>
                <SiBookstack className="text-2xl"/>
            </a>
        </section>
    );
}


