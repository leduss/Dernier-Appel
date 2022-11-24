import dagoba from "../assets/img/planetes/dagoba/dagoba_planete.png";
import dagobahPays01 from "../assets/img/planetes/dagoba/dagoba_pic2.jpeg";
import dagobahPays02 from "../assets/img/planetes/dagoba/dagoba_pic4.jpeg";
import grogu from "../assets/img/planetes/dagoba/grogu.png";
import etoilenoire from "../assets/img/planetes/Etoile_noire/etoile_noire_planete.png";
import stormt from "../assets/img/planetes/Etoile_noire/stormt.png";
import miller from "../assets/img/planetes/miller/miller_planete.png";
import pandora from "../assets/img/planetes/Pandora/pandora_planete.png";
import avatars from "../assets/img/planetes/Pandora/avatars.png";
import tatooine from "../assets/img/planetes/Tatooine/tatooine_planete.png";
import Tusken from "../assets/img/planetes/Tatooine/Tusken.png";
import lv426Paysage01 from "../assets/img/planetes/LV426/lv426Paysage01.png";
import alien01 from "../assets/img/planetes/LV426/alien_01.png";
// import yautja from "../assets/img/planetes/yautja/Yautja.png";
// import predator from "../assets/img/planetes/yautja/predator.png";

const Planetes = [
  {
    id: 1,
    planetName: "Dagobah",
    img: dagoba,
    isHidden: false,
    darkFriday: false,
    soldOut: false,
    perso: grogu,
    photo01: dagobahPays01,
    photo02: dagobahPays02,
    stat: [
      { category: "Places restantes", level: 60 },
      { category: "Danger", level: 50 },
      { category: "Résistance à l'Homme", level: 20 },
      { category: "Habitabilité - Confort", level: 70 },
    ],
    txt: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
  },
  {
    id: 2,
    planetName: "Etoile Noire",
    img: etoilenoire,
    isHidden: false,
    darkFriday: true,
    soldOut: false,
    perso: stormt,
    photo01: "",
    photo02: "",
    stat: [
      { category: "Places restantes", level: 100 },
      { category: "Danger", level: 75 },
      { category: "Résistance à l'Homme", level: 5 },
      { category: "Habitabilité - Confort", level: 85 },
    ],
    txt: "",
  },

  {
    id: 3,
    planetName: "Miller",
    img: miller,
    isHidden: false,
    darkFriday: false,
    soldOut: false,
    perso: grogu,
    photo01: "",
    photo02: "",
    stat: [
      { category: "Places restantes", level: 70 },
      { category: "Danger", level: 65 },
      { category: "Résistance à l'Homme", level: 80 },
      { category: "Habitabilité - Confort", level: 55 },
    ],
    txt: "",
  },

  {
    id: 4,
    planetName: "Pandora",
    img: pandora,
    isHidden: false,
    darkFriday: false,
    soldOut: true,
    perso: avatars,
    photo01: "",
    photo02: "",
    stat: [
      { category: "Places restantes", level: 0 },
      { category: "Danger", level: 50 },
      { category: "Résistance à l'Homme", level: 40 },
      { category: "Habitabilité - Confort", level: 70 },
    ],
    txt: "",
  },

  {
    id: 5,
    planetName: "Tatooine",
    img: tatooine,
    isHidden: false,
    darkFriday: false,
    soldOut: false,
    perso: Tusken,
    photo01: "",
    photo02: "",
    stat: [
      { category: "Places restantes", level: 25 },
      { category: "Danger", level: 70 },
      { category: "Résistance à l'Homme", level: 90 },
      { category: "Habitabilité - Confort", level: 40 },
    ],
    txt: "",
  },

  {
    id: 6,
    planetName: "LV-426",
    img: miller,
    isHidden: false,
    darkFriday: true,
    soldOut: false,
    perso: alien01,
    photo01: lv426Paysage01,
    photo02: "",
    stat: [
      { category: "Places restantes", level: 95 },
      { category: "Danger", level: 100 },
      { category: "Résistance à l'Homme", level: 100 },
      { category: "Habitabilité - Confort", level: 2 },
    ],
    txt: "Le contact étant perdu avec cette planète, nous ne pouvons nous prononcer sur son accueil. Concernant le confort, les habitants (hommes, femmes et enfants) semblaient heureux mais tombaient rapidement enceintes sous la contrainte des autochtones.",
  },

  {
    id: 7,
    planetName: "miller",
    img: miller,
    isHidden: false,
  },

  {
    id: 8,
    planetName: "miller",
    img: miller,
    isHidden: false,
  },

  {
    id: 9,
    planetName: "miller",
    img: miller,
    isHidden: false,
  },

  {
    id: 10,
    planetName: "miller",
    img: miller,
    isHidden: false,
  },

  {
    id: 11,
    planetName: "Miller",
    img: miller,
    isHidden: false,
  },

  {
    id: 12,
    planetName: "miller",
    img: miller,
    isHidden: false,
  },
];

export default Planetes;
