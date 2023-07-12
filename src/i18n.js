import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // language resources
    resources: {
      en: {
        translation: {
            home: "Home",
            play: "Play",
            compete: "Compete",
            learn: "Learn",
            memberLogin: "Member Login",
            bookNow: "Book Now",
            basicResources: "Basic Resources",
            instructors: "Instructors",
            language: "Language",
            welcome: "Welcome to Eagle's Nest Golf Club!",
            welcomet1: "Whether you're a seasoned golfer seeking a new challenge or a beginner in the sport, our course and trained instructors cater to players of all skill levels.",
            location: "Location",
            contact: "Contact",
            exploreOurCourses: "Explore Our Courses",
            gcdesc: "18 Hole Golf Course",
            learnMore: "Learn More"
        }
      },
      fr: {
        translation: {
            home: "Accueil",
            play: "Jeu",
            compete: "Concourir",
            learn: "Apprenez",
            memberLogin: "Connexion du membre",
            bookNow: "Réserver",
            basicResources: "Ressources de base",
            instructors: "Instructeurs",
            language: "Langue",
            welcome: "Bienvenue au Eagle's Nest Golf Club!",
            welcomet1: "Que vous soyez un golfeur chevronné à la recherche d'un nouveau défi ou un débutant, notre parcours et nos instructeurs qualifiés s'adressent aux joueurs de tous niveaux.",
            location: "Adresse",
            contact: "Contacter",
            exploreOurCourses: "Découvrez nos cours",
            gcdesc: "Terrain de golf 18 trous",
            learnMore: "Plus d'informations"
          }
      },
    }
  });

export default i18n;