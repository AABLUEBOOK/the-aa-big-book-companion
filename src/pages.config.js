import Home from './pages/Home';
import Section1 from './pages/Section1';
import Section2 from './pages/Section2';
import Section3 from './pages/Section3';
import Section4 from './pages/Section4';
import Section5 from './pages/Section5';
import Section6 from './pages/Section6';
import Section7 from './pages/Section7';
import Section8 from './pages/Section8';
import Section9 from './pages/Section9';
import Section10 from './pages/Section10';
import Chapter from './pages/Chapter';
import ExportBlock from './pages/ExportBlock';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Section1": Section1,
    "Section2": Section2,
    "Section3": Section3,
    "Section4": Section4,
    "Section5": Section5,
    "Section6": Section6,
    "Section7": Section7,
    "Section8": Section8,
    "Section9": Section9,
    "Section10": Section10,
    "Chapter": Chapter,
    "ExportBlock": ExportBlock,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};