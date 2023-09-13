import BioArticle from './BioArticle';
import ProfileSection from './ProfileSection';
import Footer from './Footer';

export default function Main() {

    return (
        <main id="main" className=" dark:bg-gray-700 dark:text-white p-4 flex flex-col lg:flex-row space-y-6 space-x-6">

            <BioArticle/>
            
            <ProfileSection/>

            <Footer/>

        </main>
    );
}