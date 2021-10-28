import React from 'react'
import { Link } from 'react-router-dom'

import Widget from '../../widget/components/Widget'

const Kupi = () => {
  const renderPageTitle = () => {
    return(
      <div className="page">
        <div className="page-title">
          Kupi FM
        </div>
        <div className="page-nav">
          <Link to="/">
            Home
          </Link>
          <span>/</span>
          Kupi FM
        </div>
      </div>
    )
  }

  return(
    <div className="main">
      {renderPageTitle()}
      <div className="main-flex">
        <main>
          <h4>Offline</h4>
          <p>S obzirom da dosta ljudi pita da li neko prodaje Football Manager 2022 offline mi smo spremni davati offline verziju igre, a novac bi išao za održavanje našeg portala. Minimalna cijena je 7 BAM, 28 HRK, 3.5€ a naravno uvijek možete doprinijeti i više ukoliko to želite. Za one koji nisu u mogučnosti, a dio su ove zajednice izaći ćemo u susret i oni nisu dužni da bilo šta plačaju.</p>
        </main>
        <Widget />
      </div>      
    </div>
  )
}

export default Kupi