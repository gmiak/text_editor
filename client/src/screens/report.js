import React from 'react';
import { Divider } from 'primereact/divider';
// @flow

/*
** Add 2x/ @flow to any files you want to type check.
** Now can you run npm run flow to ckeck the files for errors. 
*/

function Reports() {

  return (
    <div className="containtBody2">
      <section className="section_text">
        <h2>Kmom01</h2>

        <div className="div_text">
          <h5>Mål?</h5>
          <p className="text_align">Uppgiften har generellt flyttat på bra.
            Jag började med att kolla dem fyra korta filmerna om de olika ramverken (Angular, React, Svelte och Vue).
            Sedan gick jag vidare till John Papas föreläsning om hur man kan tänka när man väljer ett JavaScript-ramverk.
            Jag fann föreläsningen lärorik och intressant. Det är inte lätt att veta vilket ramverk man ska välja och jag
            håller med att man ska ta ett ramverk som känns bra för en samt som man gillar utvecklar i. </p>
          <p className='text_align'>
            Jag valde därför React tillsammans med TypeScript och Trix som komponent för text editor.
            TypeScript enligt mig, tillför det som länge saknats i JavaScript; typer.
            Jag tycker att det är en fördel att kunna exempelvis bestämma vilken typ av element som en
            array kommer att lagra. Om jag vill endast spara objekt av typ “string” i en array så löser
            det sig med att instantiera en generisk array med “string” som typ, vilket kan vara svårt att göra i JavaScript.
          </p>
          <p className='text_align'>
            JavaScript ger utvecklarna ganska stor frihet att kunna mixtra olika objekt med olika typer i en samling.
            Men denna frihet, enligt min mening kan vara i en viss grad skadlig. Vissa situationer krävs en rigorous
            struktur i kodbasen och TypeScript maximerar det,
          </p>

          <h5>Vad man har lärt sig?</h5>

          <p className="text_align">Jag har lärt mig en del nya koncept såsom ramverket Svelte och Vanilla
            JavaScript samt text editor Trix. Jag har även fått en djupare förståelse om “The Big Three” Angular,
            React och Vue. Kursmomenten har hjälpt mig att få någorlunda ordning bland JavaScript-ramverken, deras likheter samt olikheter.
            Ett mål som jag planera utföra, är att välja och bekanta mig med tre olika ramverk för att kunna få en klar bild om JavaScript-ramverken.</p>

        </div>

      </section>

      <Divider />

      <section className="section_text">
        <h2>Kmom02</h2>
        <div className="div_text">
          <h5>Mål?</h5>
          <p className="text_align">Kursmoment var ganska lång och tog lite mer tid. Det blev en
            del gör-om-och-gör-rätt-moment. Vissa saker har inte funkat
            såsom installationen av MongoDB i min lokala maskin. Jag sitter på Ubuntu 22.04 vilket
            gör att vissa packages som mongodb-org, är inte tillgänga för min distribution. Jag har tyvärr inte kunnat
            starta MongoDB klienten i min maskin via kommandot “mongosh”. </p>
          <p className='text_align'>
            Jag får helt enkelt installera Windows i dual-boot för att testa hela den delen som
            handlar om att skapa en databas och göra setup för grunddata lokalt i terminalen.
            Det har annars funkat bra att jobba med MongoDB i min kodbas med React, TypeScript, Express och Node.
          </p>

          <h5>Vad man har lärt sig?</h5>

          <p className="text_align">Den nya delen har varit driftsättning med Azure.
            Det har gått lite sådär. Jag har fått en del felmeddelande under installationen.
            Jag har fortfarande inte kunnat kopplat rent konkret hur Azure skulle kunna utnyttjas
            för främja utvecklingen av applikationen. Men Jag ser fram emot kommande kursmoment för
            att få en klarare bild av konceptet.
          </p>
          <p className="text_align">
            Ytterligare en grej som var intressant och lärorik, är genomgång av Event-loop med Philip
            Roberts. Det var häftigt att se hur en “single thread language” kan hantera olika processer
            med hjälp av Call  Stack och ge känslan av multi thread language. En superbra grej med videon
            är att jag äntligen lärde mig skillnaden mella synchronous och asynchronous function. Hur de
            funkar och varför de användas.
          </p>

        </div>
      </section>

      <Divider />

      <section className="section_text">
        <h2>Kmom03</h2>
        <p>Här är redovisningstexten</p>
      </section>

      <Divider />

      <section className="section_text">
        <h2>Kmom04</h2>
        <p>Här är redovisningstexten</p>
      </section>

      <Divider />

      <section className="section_text">
        <h2>Kmom05</h2>
        <p>Här är redovisningstexten</p>
      </section>

      <Divider />

      <section className="section_text">
        <h2>Kmom06</h2>
        <p>Här är redovisningstexten</p>
      </section>

      <Divider />

      <section className="section_text">
        <h2>Kmom07-10</h2>
        <p>Här är redovisningstexten</p>
      </section>

    </div>
  );
}

export default Reports;
