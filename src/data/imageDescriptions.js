
export const swiftyDescriptions = {
    login: {//LOGIN
        eng:"This is the first fragment of the app that handels the user login. It Receives username and password, validates them against a server, and securely stores user data upon successful login. It utilizes background threads to prevent the app from freezing during network requests.",
        swe:"Det är första fragmentet i appen där användarinloggning hanteras. Det tar emot användarnamn och lösenord, validerar dem mot en server och lagrar användaruppgifter säkert vid lyckad inloggning. Det Använder bakgrundstrådar för att undvika att appen låser sig under nätverksförfrågningar."
    },
    signup:{//SIGNUP
        eng:"This fragment handles user registration within the app. It provides a form for users to input their details (username, email, name, birthdate, password) and validates this input before sending it to a server to create a new user account. ",
        swe:"Detta fragment hanterar användarregistrering inom appen. Det tillhandahåller ett formulär där användare kan mata in sina uppgifter (användarnamn, e-post, namn, födelsedatum, lösenord) och validerar denna inmatning innan den skickas till en server för att skapa ett nytt användarkonto."
    },
    home:{//HOME
        eng:"This fragment serves as the main landing page of the app, providing an overview of company data. It displays a grid of company logos, each clickable to navigate to a detailed view of the corresponding company. ",
        swe:"Detta fragment fungerar som appens huvudsida och ger en översikt över företagsdata. Det visar ett rutnät av företagslogotyper, där varje logotyp är klickbar för att navigera till en detaljerad vy av motsvarande företag."
    },
    profil:{//PROFIL
        eng:"This fragment displays the currently logged-in user's profile information, including username, name, email, and birthdate. Features a placeholder profile image (to be replaced with actual user images in the future) and a logout button that clears the user session and returns to the login screen. ",
        swe:"Detta fragment visar den inloggade användarens profilinformation, inklusive användarnamn, namn, e-postadress och födelsedatum. Har en platshållare för profilbild (som ska ersättas med riktiga användarbilder i framtiden) och en utlogggningsknapp som rensar användarsessionen och återgår till inloggningsskärmen."
    },
    shop:{//SHOP
        eng:"This fragment displays details for a specific company and its products. It allows users to browse products and add them to their shopping cart.",
        swe:"Detta fragment visar detaljer för ett specifikt företag och dess produkter. Det låter användare bläddra bland produkter och lägga till dem i sin kundvagn."
    },
    cart:{//CART
        eng:"This fragment displays the user's shopping cart and enables them to proceed to checkout. It leverages a CartViewModel to manage cart items, a CartAdapter to present the items in a RecyclerView, and communicates with a backend service to process the transaction. ",
        swe:"Detta fragment visar användarens varukorg och gör det möjligt för dem att gå vidare till kassan. Det använder en CartViewModel för att hantera varor i korgen, en CartAdapter för att presentera varorna i en RecyclerView, och kommunicerar med en backend-tjänst för att bearbeta transaktionen."
    },
    deliver:{//DELIVER
        eng:"This fragment provides a visual representation of an order's delivery status. It currently offers a mock-up of the delivery route between the user's location and a simulated delivery point, leveraging OpenStreetMap for the map display. ",
        swe:"Detta fragment ger en visuell representation av en orders leveransstatus. Det erbjuder för närvarande en simulering av leveransrutten mellan användarens plats och en simulerad leveranspunkt, med hjälp av OpenStreetMap för kartvisningen.\n"
    },
    loading:{//LOADING
        eng:"This is a reusable Android dialog fragment that displays a loading indicator to provide visual feedback to the user while a background process is running. ",
        swe:"Detta är ett återanvändbart Android-dialogfragment som visar en laddningsindikator för att ge visuell feedback till användaren medan en bakgrundsprocess körs."
    },
};