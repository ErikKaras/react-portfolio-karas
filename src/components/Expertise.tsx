import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faCouch, faHouse, faPaintRoller } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "Blender",
    "3ds max",
    "SketchUp",
];

const labelsSecond = [
    "Substance Painter",
    "Substance Designer",
    "Photoshop",
    "UV Mapping Tools",
];

const labelsThird = [
    "Blender",
    "3ds Max",
    "Zmodeler",
    "FiveM",
    "CodeWalker",
    "YMap",
    "OpenIV",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Zkušenosti</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faHouse} size="3x"/>
                    <h3>3D Modelování Interiérů</h3>
                    <p>Vytvářím detailní a realistické 3D modely interiérů, které zahrnují jak moderní, tak tradiční designy. Specializuji se na realistické zobrazení nábytku, osvětlení, dekorací a dalších prvků, které vytvářejí funkční a estetické prostředí.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Používané nástroje:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPaintRoller} size="3x"/>
                    <h3>Texturování a Materiály pro Interiéry</h3>
                    <p>Navrhuji textury a materiály, které oživují interiéry, včetně podlah, stěn, nábytku a dalších dekorativních prvků. Zaměřuji se na dosažení co nejvyšší úrovně realismu a detailu.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Používané nástroje:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCouch} size="3x"/>
                    <h3>3D Interiéry pro FiveM (GTA V)</h3>
                    <p>pecializuji se na tvorbu 3D interiérů pro modifikace FiveM, kde navrhuji realistické a funkční prostory pro hráče, které mohou být součástí herního světa. Vytvářím interiéry pro různé typy budov, jako jsou obchody, restaurace, kanceláře a další herní lokace.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Používané nástroje:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;