import React from 'react'
import { Link } from 'react-router-dom'

import Widget from '../../widget/components/Widget'

const Pravila = () => {
  const renderPageTitle = () => {
    return(
      <div className="page">
        <div className="page-title">
          Pravila
        </div>
        <div className="page-nav">
          <Link to="/">
            Home
          </Link>
          <span>/</span>
          Pravila
        </div>
      </div>
    )
  }

  return(
    <div className="main">
      {renderPageTitle()}
      <div className="main-flex">
        <main>
        <h4>Nije dozvoljeno</h4>
        <p>Kopirati, ponovo objaviti, emitovati, distribuirati ili na bilo koji drugi način koristiti sadržaj ove web stranice, osim za gledanje, štampanje, koriščćenje ili spremanje rezervne kopije na vaš lokani tvrdi disk za vašu ličnu, nekomercijalnu upotrebu.</p>
        <h4>Dozvoljeno je</h4>
        <p>Kopiranje manjih dijelova naših ekskluzivnih članaka ukoliko naglasite autora članka i link odakle ste taj dio preuzeli.</p>
        <p>Redistribucija nakon što dobijete pismenu dozvolu od orginalnog autora.</p>
        <h4>Pravila za komentare</h4>
        <p>Dozvoljeni jezici su jezici sa balkanskog govornog područja i engleski jezik.</p>
        <p>Poštujte ostale članove. Izrazite svoje mišljenje zrelo i uz poštovanje. Izbjegavajte vrijeđanje i cenzurišite psovke.</p>
        <p>Zabranjeno je vrijeđati osoblje portala.</p>
        <p>Zabranjeno je pisati seksističke, rasističke, vjerske i diskriminatorne komentare. Ne koristite nadimke povezane s takvim ideologijama.</p>
        <p>Zabranjeno je govoriti o piratskim kopijama Football Managera.</p>
        <p>Zabranjeno je oglašavanje bez dozvole osoblja.</p>
        <p>Zabranjen je bilo kakav materijal koji se odnosi na pornografiju.</p>
        <h4>Pravila foruma</h4>
        <p>Dozvoljeni jezici su jezici sa balkanskog govornog područja i engleski jezik.</p>
        <p>Poštujte ostale članove. Izrazite svoje mišljenje zrelo i uz poštovanje. Izbjegavajte vrijeđanje i cenzurišite psovke.</p>
        <p>Zabranjeno je vrijeđati osoblje portala.</p>
        <p>Zabranjeno je pisati seksističke, rasističke, vjerske i diskriminatorne komentare. Ne koristite nadimke povezane s takvim ideologijama.</p>
        <p>Zabranjeno je govoriti o piratskim kopijama Football Managera.</p>
        <p>Zabranjeno je oglašavanje bez dozvole osoblja.</p>
        <p>Zabranjen je bilo kakav materijal koji se odnosi na pornografiju.</p>
        <p>Zabranjeni su postovi koji sadrže samo jednu riječ.</p>
        <p>Izbjegavajte korištenje Caps Locka.</p>
        <p>Teme moraju biti on-topic inače će biti premještene u odgovarajući podforum ili će biti izbrisane.</p>
        <p>Forum je dostupan svima i svi se mogu registrovati stoga FM387 tim ne odgovara za materijal preuzet sa foruma.</p>
        <p>Zabranjena je pretjerana upotreba smajlija na jednom mjestu.</p>
        <p>Maksimalne dimenzije avatara su 80×80 piksela, a minimalne 25×25.</p>
        <p>Zabranjeni su seksistički, rasistički, vjerski i diskriminatorni avatari.</p>
        <p>Zabranjeno je uznemiravanje drugih korisnika putem privatnih poruka.</p>
        <p>Ukoliko kopirate neku vijest ili sadržaj obavezno je napisati izvor.</p>
        <h4>Kodeksi moderatora</h4>
        <p>Zaštićene karakteristike jednakosti su dob, invalidnost, promjena spola, rasa, vjera, spol i seksualna orijentacija, brak i građansko partnerstvo, trudnoća i materinstvo.</p>
        <p>Možete koristiti neprikladan jezik:</p>
        <ul>
          <li>Ako citirate izvor ili pojedinca</li>
          <li>U šali</li>
          <li>U privatnom razgovoru</li>
        </ul>
        <h4>Prilikom obraćanja moderatorima</h4>
        <p>Zabranjen je bilo kakav oblik nepoštovanja. Oni patroliraju ovim forumom i koriste svoje slobodno vrijeme kako bi pomogli u radu foruma.</p>
        <p>Zabranjen je bilo kakav oblik vrijeđanja</p>
        <p>Ukoliko smatrate da vas je neko od moderatora vrijeđao obratiti se nekom od admina.</p>
        </main>
        <Widget />
      </div>      
    </div>
  )
}

export default Pravila