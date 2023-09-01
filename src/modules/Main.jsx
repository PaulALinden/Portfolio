import profil4 from '../media/profil4.png';
import { SiLinkedin, SiGithub, SiBookstack } from 'react-icons/si';

export default function Main() {

    const url = new URL('../../public/cv-paul-linden.pdf', import.meta.url);

    return (
        <main id="main" className=" dark:bg-gray-700 dark:text-white p-4 flex flex-col lg:flex-row space-y-6 space-x-6">

            <article className="space-y-5 basis-1/2 order-2 lg:order-1">

                <h1 className="text-5xl">Välkommen</h1>

                <h2 className="text-2xl">Javautvecklare</h2>

                <p className="pr-6 overflow-auto">

                    Studerande Javautvecklare som söker efter en LIA-plats att få växa och att utveckla mina kunskaper inom min nyvunna passion. Min start som Javautvecklare har både varit givande och utmanande och jag känner mig nu redo för nästa steg att tillämpa mina kunskaper i en verklig arbetsmiljö.

                </p>

                <p>

                    Det som driver mig är den spännande kombinationen av problemlösning och kreativitet som kodning erbjuder. Jag tycker om att ta itu med komplexa utmaningar och hitta bra lösningar.

                </p>

                <p>
                    
                    Under min studietid har jag haft möjligheten att arbeta med en rad tekniker, inklusive Java, JavaScript, HTML & CSS, samt SQL & NoSQL-databaser. Genom min portfolio kommer jag att dela några av de projekt som jag har arbetat med under min studietid

                </p>

                <p>
                Jag ser fram emot att hitta en LIA-plats där jag kan fortsätta att odla min passion och samtidigt bidra med min entusiasm och arbetsmoral.
                </p>

            </article>

            <div id="profil" className=" w-48 order-1 lg: w-96 relative rounded-full order-2">

                <img src={profil4} alt="BILD" />


                <a href={url} target="_blank" className="bg-[#374151] border-2 border-white rounded-l-lg p-2 absolute bottom-0 left-0 flex justify-center items-center space-x-1 h-12 w-16 text-center">

                    <p className="mt-6 mb-2">cv</p>
                    <SiBookstack className="text-2xl" />

                </a>

            </div>

            <footer id="socialmedia" className="order-3 flex space-x-2 bg-[#374151] w-24 border-2 border-white lg:fixed bottom-6 right-6 p-4">

                <a href="https://linkedin.com/in/paul-lindén-433457257"><SiLinkedin className="text-2xl" /></a>
                <a href="https://github.com/PaulALinden?tab=repositories"><SiGithub className="text-2xl" /></a>

            </footer>

        </main>

    );
}