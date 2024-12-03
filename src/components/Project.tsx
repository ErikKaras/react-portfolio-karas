import React from "react";

import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projekty</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://store.dtpl3d.com/package/4984497" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://store.dtpl3d.com/package/4984497" target="_blank" rel="noreferrer"><h2>Sandy Shores Modern</h2></a>
                <p>Moderní interiér v pouštní oblasti, který kombinuje minimalistický styl s přírodními materiály. Otevřený prostor, teplé tóny a velká okna vytvářejí pohodlné a funkční prostředí, které ladí s okolní krajinou.</p>
            </div>
            <div className="project">
                <a href="https://store.dtpl3d.com/package/5011095" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://store.dtpl3d.com/package/5011095" target="_blank" rel="noreferrer"><h2>Car Rental</h2></a>
                <p>Car Rental je moderní půjčovna aut, která nabízí široký výběr vozidel pro krátkodobý i dlouhodobý pronájem. Projekt poskytuje kvalitní vozy pro všechny, kteří potřebují spolehlivý dopravní prostředek.</p>
            </div>
            <div className="project">
                <a href="https://store.dtpl3d.com/package/5102832" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://store.dtpl3d.com/package/5102832" target="_blank" rel="noreferrer"><h2>4E Gym Vespucci</h2></a>
                <p>4E Gym Vespucci je malá prosklená posilovna, která se nachází přímo na pláži. S moderním vybavením a úchvatným výhledem na moře nabízí skvélé prostředí pro cvičení a relaxaci. Tato posilovna je ideálním místem pro všechny, kteří chtějí trénovat s nádechem svěžesti a přírody.</p>
            </div>
            <div className="project">
                <a href="https://store.dtpl3d.com/package/5123742" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://store.dtpl3d.com/package/5123742" target="_blank" rel="noreferrer"><h2>Vespucci Beach Weed Shop</h2></a>
                <p>Vespucci Beach Weed Shop je moderní prodejna marihuany, situovaná přímo na pláži. S příjemným a relaxačním prostředím nabízí široký výběr produktů pro ty, kteří hledají kvalitní zážitky v oblasti konopí. Ideální místo pro návštěvníky, kteří chtějí vychutnat produkty s výhledem na moře a přímořskou atmosféru.</p>
            </div>
            <div className="project">
                <a href="https://store.dtpl3d.com/package/5028234" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://store.dtpl3d.com/package/5028234" target="_blank" rel="noreferrer"><h2>Vinewood One</h2></a>
                <p>Vinewood One je velká a prostorná vila situovaná v prestižní oblasti Vinewood. S moderním designem a luxusním vybavením nabízí nejen pohodlné bydlení, ale i dechberoucí výhledy na město a okolní krajinu. Tato vila je ideálním místem pro ty, kteří hledají kombinaci elegance, soukromí a komfortu.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;