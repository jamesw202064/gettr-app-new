import React from 'react';

import { Container } from '../components/container';
import { Section } from '../components/section';

export default function ImprintPage() {
  return (
    <Section color="default">
      <Container size="large" className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-8 items-center justify-center">
        <div className="row-start-2 lg:row-start-1 lg:col-start-1 lg:col-end-3 text-center lg:text-left">
          <h3 className={`w-full relative	mb-10 text-5xl font-extrabold tracking-normal leading-tight title-font`}>
            <span className={`text-3.5xl font-extrabold leading-10 text-brand mb-5 tracking-wide`}>Imprint</span>
          </h3>
          <div className={`prose prose-lg mx-auto lg:mx-0 mb-10 dark:prose-dark`}>
            Pflichtangaben gem. § 5 TMG:
            <br />
            <br />
            GETTR USA, Inc.
            <br />
            c/o LegalInc Corporate Services Inc., <br />
            651 N. Broad St., Suite 206, Middletown, DE 19709. <br />
            <br />
            GETTR ist eine nach dem Recht des US-Bundesstaates Delaware unter der Registrierungsnummer 3227826
            errichtete haftungsbeschränkte Gesellschaft, die von ihren Vorständen Jason Miller und Ken Huang gesetzlich
            vertreten wird.
            <br />
            <br />
            Kontakt:
            <br />
            Email: <br />
            support@gettr.com
            <br />
            <br />
            Zustellungsbevollmächtigter für Verwaltungsverfahren und zivilgerichtliche Verfahren gemäß § 5 Abs. 1 NetzDG
            ist REPGOW Rechtsanwaltsgesellschaft mbH, im Gewerbepark C 25, 93059 Regensburg
            <br />
            Zustellungsbevollmächtigter gemäß § 20 UrhDaG für Zustellungen in Gerichtsverfahren ist REPGOW
            Rechtsanwaltsgesellschaft mbH, im Gewerbepark C 25, 93059 Regensburg
            <br />
            Für andere Verfahren oder Anliegen als in den o.g. Vorschriften ausdrücklich genannt besteht keine
            Zustellungsbevollmächtigung.
          </div>
        </div>
      </Container>
    </Section>
  );
}
