import React from 'react'
import { Link } from 'react-router-dom'

import Widget from '../../widget/components/Widget'

const Pp = () => {
  const renderPageTitle = () => {
    return(
      <div className="page">
        <div className="page-title">
          Politika privatnosti
        </div>
        <div className="page-nav">
          <Link to="/">
            Home
          </Link>
          <span>/</span>
          Politika privatnosti
        </div>
      </div>
    )
  }

  return(
    <div className="main">
      {renderPageTitle()}
      <div className="main-flex">
        <main>
        <h4>Ko smo</h4>
          <p>FM387 je bosanskohercegovačka zajednica ljubitelja Football Managera.</p>
          <p>Adresa naše web stranice je: https://fm387.com.</p>
          <h4>Komentari</h4>
          <p>Kada posjetitelji napišu komentar na web-stranici mi prikupljamo podatke prikazane u formi komentara, a također i IP adresu posjetioca kao i string korisničkog agenta preglednika, kako bismo lakše otkrili spam.</p>
          <p>Moguće je da je anonimiziran string kreiran iz vaše email adrese (koji se također zove hash) dostavljen Gravatar servisu kako bi provjerili da li ga koristite. Pravila privatnosti Gravatar servisa dostupna su ovdje: https://automattic.com/privacy/. Nakon odobrenja vašeg komentara, vaša profilna slika je javno vidljiva u kontekstu vašeg komentara.</p>
          <h4>Fajlovi</h4>
          <p>Ako dodate sliku na web stranicu, trebali bi izbjegavati prenos slika koje imaju ugrađene podatke o lokaciji (EXIF GPS). Posjetioci web stranice mogu ih preuzeti i izdvojiti bilo koje podatke o lokaciji iz slika sa web stranice.</p>
          <h4>Kolačići</h4>
          <p>Ako napišete komentar na našoj web stranici, možete odabrati da spremite ime, email adresu i web stranicu u kolačiće. Razlog za ovo je kako bi vam olakšali ponovno komentarisanje, jer nećete morati popunjavati vaše lične informacije više puta. Ovi kolačići traju godinu dana.</p>
          <p>Ako posjetite našu stranicu za prijavu, postaviti ćemo privremeni kolačić kako bi utvrdili da li vaš preglednik prihvaća kolačiće. Ovaj kolačić ne sadrži osobne podatke i briše se kada ugasite preglednik.</p>
          <p>Kada se prijavite, također ćemo postaviti nekoliko kolačića kako bi sačuvali vaše podatke o prijavi i vaše postavke prikaza. Kolačići prijave traju dva dana, a kolačići postavki prikaza traju godinu dana. Ako odaberete “Zapamti me”, vaša prijava će trajati dvije sedmice. Ako se odjavite s računa, kolačići prijave će biti uklonjeni.</p>
          <p>Ako uredite ili objavite članak, dodatni kolačić biti će spremljen u vašem pregledniku. Ovaj kolačić ne sadrži osobne podatke i samo ukazuje na ID objave članka koji ste upravo uredili. Kolačić ističe nakon 1 dana.</p>
          <h4>Google AdSense</h4>
          <p>Web stranica koristi Google AdSense reklame.</p>
          <h4>Ugrađeni sadržaj sa drugih web lokacija</h4>
          <p>Članci na ovoj web stranici mogu sadržavati ugrađeni sadržaj (npr. video, slike, članke, itd.). Ugrađeni sadržaj sa drugih web stranica ponaša se identično kao da je posjetitelj posjetio tu drugu web stranicu.</p>
          <p>Ove web stranice možda prikupljaju podatke o vama, koriste kolačiće, imaju ugrađeno dodatno praćenje od trećih strana, i nadgledaju vašu interakciju s tim ugrađenim sadržajem, uključujući praćenje vaše interakcije s ugrađenim sadržajem ako imate račun i prijavljeni ste na web stranici.</p>
          <h4>S kim dijelimo vaše podatke</h4>
          <p>/</p>
          <h4>Koliko dugo zadržavamo vaše podatke</h4>
          <p>Ako ostavite komentar, komentar i njegove metapodatke se zadržavaju na neodređeno vrijeme. To radimo iz razloga da možemo priznati i odobriti bilo kakve slijedeće komentare automatski umjesto da ih zadržavamo u redu za moderaciju.</p>
          <p>Za korisnike koji se registruju na našoj web stranici (ako ih ima), mi također pohranjujemo lične podatke koje navedu u njihovim korisničkim profilima, Svi korisnici mogu vidjeti, urediti, ili obrisati svoje lične podatke u bilo koje vrijeme (osim što ne mogu promijeniti svoje korisničko ime). Administratori web stranice također mogu vidjeti i urediti te informacije.</p>
          <h4>Kakva prava imate u vezi svojih podataka</h4>
          <p>Ako imate račun na ovoj web stranici, ili ste pisali komentare, možete zatražiti primanje izvoznog fajla ličnih podataka koje imamo o vama, uključujući sve podatke koje ste nam dostavili. Također možete zatražiti brisanje svih ličnih podataka koje imamo o vama. Ovo ne uključuje bilo koje podatke koje smo obavezni držati za administrativne, pravne ili sigurnosne namjene.</p>
          <h4>Gdje šaljemo vaše podatke</h4>
          <p>/</p>
        </main>
        <Widget />
      </div>      
    </div>
  )
}

export default Pp