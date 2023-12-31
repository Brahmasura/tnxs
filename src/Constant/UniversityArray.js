import bashkir from "../Assets/University/bashkir.jpeg";
import bashkirLogo from "../Assets/University/bashkirLogo.jpg";
import kazan from "../Assets/University/kazan.jpg";
import kazanLogo from "../Assets/University/kazanLogo.png";
import orel from "../Assets/University/orel.jpg";
import orelLogo from "../Assets/University/orelLogo.webp";
import kabar from "../Assets/University/kabar.jpeg";
import kabarLogo from "../Assets/University/kabarLogo.png";
import omsk from "../Assets/University/omsk.jpg";
import omskLogo from "../Assets/University/omskLogo.png";
import kemerovo from "../Assets/University/kemerovo.jpeg";
import kemerovoLogo from "../Assets/University/kemerovoLogo.png";
import kursk from "../Assets/University/kursk.jpg";
import kurskLogo from "../Assets/University/kurskLogo.jpg";
import kab1 from "../Assets/Gallery/Kabardino/kab1.jpg";
import kab2 from "../Assets/Gallery/Kabardino/kab2.jpg";
import kab3 from "../Assets/Gallery/Kabardino/kab3.jpg";
import kab4 from "../Assets/Gallery/Kabardino/kab4.jpg";
import kab5 from "../Assets/Gallery/Kabardino/kab5.jpg";
import kab6 from "../Assets/Gallery/Kabardino/kab6.jpg";
import kab7 from "../Assets/Gallery/Kabardino/kab7.jpg";
import kab8 from "../Assets/Gallery/Kabardino/kab8.jpg";
import kab9 from "../Assets/Gallery/Kabardino/kab9.jpg";
import kab10 from "../Assets/Gallery/Kabardino/kab10.jpg";
import kab11 from "../Assets/Gallery/Kabardino/kab11.jpg";
import kab12 from "../Assets/Gallery/Kabardino/kab12.jpg";



// *********************pdfs*****************************
import bashkirPdf from "../Assets/UniPdf/bashkir.pdf";
import kabardinoPdf from "../Assets/UniPdf/kabardino.pdf";
import kazanPdf from "../Assets/UniPdf/kazan.pdf";
import kurskPdf from "../Assets/UniPdf/kursk.pdf";
import omskPdf from "../Assets/UniPdf/omsk.pdf";
import orelPdf from "../Assets/UniPdf/orel.pdf";

const UniArray = [
  {
    university: "OMSK STATE MEDICAL UNIVERSITY ",
    uni: "Omsk",
    image: omsk,
    city: "Omsk, RUSSIA",
    web: "https://omsk-osma.ru/en",
    uniDist: "OMSK",
    distance: "2235",
    logo: omskLogo,
    pdf: omskPdf,
  },

  {
    university: "OREL STATE UNIVERSITY ",
    uni: "Orel",
    image: orel,
    city: "OREL/ORYOL, RUSSIA",
    web: "https://int.oreluniver.ru/en/",
    uniDist: "OREL",
    distance: "326",
    logo: orelLogo,
    pdf: orelPdf,
  },

  {
    university: "KABARDINO-BALKARIAN STATE UNIVERSITY ",
    uni: "Kabardino",
    image: kabar,
    city: "NALCHIK, Kabardino-Balkaria, RUSSIA",
    web: "https://eng.kbsu.ru/",
    uniDist: "NALCHIK",
    distance: "1430",
    logo: kabarLogo,
    pdf: kabardinoPdf,
    gallery: [kab1, kab2, kab3, kab4, kab5, kab6, kab7, kab8, kab9, kab10, kab11, kab12],
  },

  {
    university: "KEMEROVO STATE MEDICAL UNIVERSITY ",
    uni: "Kemerovo",
    image: kemerovo,
    city: "Kemerovo Oblast, RUSSIA",
    web: " https://kemsmu.ru/",
    uniDist: "KEMEROVO",
    distance: "2985",
    logo: kemerovoLogo,
    pdf: omskPdf,
  },

 
  {
    university: "KURSK STATE MEDICAL UNIVERSITY ",
    uni: "Kursk",
    image: kursk,
    city: "Kursk, RUSSIA",
    web: "https://kurskstatemedicaluniversity.org/",
    uniDist: "VOLGOGRAD",
    distance: "457",
    logo: kurskLogo,
    pdf: kurskPdf,
  },
  {
    university: "BASHKIR STATE MEDICAL UNIVERSITY",
    uni: "Bashkir",
    image: bashkir,
    city: "UFA, Bashkortostan, RUSSIA",
    web: "https://bashgmu.ru/en/",
    uniDist: "UFA",
    distance: "1168",
    logo: bashkirLogo,
    pdf: bashkirPdf,
  },

  {
    university: "KAZAN FEDERAL UNIVERSITY",
    uni: "Kazan",
    image: kazan,
    city: " Kazan, RUSSIA",
    web: "http://kpfu.ru/eng",
    uniDist: "KAZAN",
    distance: "809",
    logo: kazanLogo,
    pdf: kazanPdf,
  },

];

export default UniArray;

// {
//     university:'',
//     uni:'',
//     image: ,
//     city:'',
//     web:'',
//     uniDist:'',
//     distance:'',
//     logo: ,

// },
