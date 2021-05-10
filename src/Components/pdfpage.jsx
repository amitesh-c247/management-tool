import React from 'react';
import {Container} from 'react-bootstrap';



class PdfPageComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName : "",
            email: "",
            phone: "",
            comment:""
        }
    }



    render() {
        //const {fullName, email, phone ,comment} = this.state;
      return (
          <>
            <Container>
             <div className={"about-warp mb-5"}>
                 <h1 className={"text-center pt-4 pb-4"}>PDF</h1>
                 <div className='resume job-template-napea-c247'>
				{/* <!-- Resume Block Start --> */}
				<div className='application-block cover-c247'>
					<div className='cover-page'>
						<div className='block-inner'>
							<div className='cover-name-box'>
								<div style={{ display: 'inline-block' }}>
									<p className='cover-name' data-semantic='cover-name'>
										<span
											contentEditable={true}
											suppressContentEditableWarning={true}
											className={'border-hover cover-c247-fullname'}
										>
											Vorname Nachname
										</span>
									</p>

									<p
										className='cover-name-subline'
										data-semantic='cover-name-subline'
									>
										<span
											contentEditable={true}
											suppressContentEditableWarning={true}
											className={'border-hover cover-c247-name-subline'}
										>
											berufsbezeichnung
										</span>
									</p>
								</div>
							</div>

							<div className='cover-title-box'>
								<h1 className='cover-title' data-semantic='cover-title'>
									<span
										contentEditable={true}
										suppressContentEditableWarning={true}
										className={'border-hover cover-c247-title'}
									>
										Bewerbung
									</span>
								</h1>

								<p
									className='cover-title-subline'
									data-semantic='cover-title-subline'
								>
									<span
										contentEditable={true}
										suppressContentEditableWarning={true}
										className={'border-hover cover-c247-title-subline'}
									>
										Als LOREM IUPSUM DOLAR SIT AMET CONSETETUR
										<br />
										SADPSCING BEI DER MUSTERFIRMA
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- Resume Block End --> */}

				{/* <!-- Resume Block Start --> */}
				<div className='application-block letter-head-c247'>
					<div className='letter-page'>
						<div className='block-inner'>
							<div className='letter-address-box'>
								<div className='my-row'>
									<div className='my-col-6'>
										<div
											className='letter-adress-small'
											data-semantic='letter-adress-small'
										>
											<span
												contentEditable={true}
												suppressContentEditableWarning={true}
												className={'border-hover letter-head-c247-small-adress'}
											>
												Vorname Nachname · Musterstraße XX · XXXXX Musterstadt
											</span>
										</div>
										<div
											className='letter-adress-company'
											data-semantic='letter-adress-company'
										>
											<span
												contentEditable={true}
												suppressContentEditableWarning={true}
												className={'border-hover letter-head-c247-adress-company'}
											>
												Firmenname <br /> Herr/Frau Vorname Nachname <br />{' '}
												Firmenstraße XX <br /> Stadt XXXXX
											</span>
										</div>
									</div>

									<div className='my-col-6'>
										<div
											className='letter-adress-big'
											data-semantic='letter-adress-big'
										>
											<span
												contentEditable={true}
												suppressContentEditableWarning={true}
												className={'border-hover letter-head-c247-big-adress'}
											>
												Vorname Nachname <br />
												Musterstraße XX, XXXXXMusterstadt <br />
												Telefon XXXX XXXXXXX, Mobil XXXX XXXXX <br />
												M.Mustermann@domain.de
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='letter-subject-box'>
							<div className='block-inner'>
								<p className='letter-subject' data-semantic='letter-subject'>
									<span
										contentEditable={true}
										suppressContentEditableWarning={true}
										className={'border-hover letter-head-c247-subject'}
									>
										Bewerbung als Lorem ipsum dolar sit amet consetetur
									</span>
								</p>
								<p
									className='letter-subject-subline'
									data-semantic='letter-subject-subline'
								>
									<span
										contentEditable={true}
										suppressContentEditableWarning={true}
										className={'border-hover letter-head-c247-subject-subline'}
									>
										Ihre Stellenanzeige bei Internetadresse.de vom XX.XX.XXXX
									</span>
								</p>
							</div>
						</div>

						<div className='letter-box'>
							<div className='block-inner'>
								<p className='letter-date' data-semantic='letter-date'>
									<span
										contentEditable={true}
										suppressContentEditableWarning={true}
										className={'border-hover letter-head-c247-date'}
									>
										Ort, Tag.Monat.Jahr
									</span>
								</p>
								<p className='letter-text' data-semantic='letter-text'>
									<span
										contentEditable={true}
										suppressContentEditableWarning={true}
										className={'border-hover letter-head-c247-text'}
									>
										Sehr geehrte Frau Müller, <br />
										<br />
										Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
										diam nonumy eirmod tempor invidunt ut labore et dolore magna
										aliquyam erat, sed diam voluptua. At vero eos et accusam et
										justo duo dolores et ea rebum. Stet clita kasd gubergren, no
										sea takimata sanctus est Lorem ipsum dolor sit amet.
										<br />
										<br />
										Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
										diam nonumy eirmod tempor invidunt ut labore et dolore magna
										aliquyam erat, sed diam voluptua. At vero eos et accusam et
										justo duo dolores et ea rebum. Stet clita kasd gubergren, no
										sea takimata sanctus est.
										<br />
										<br />
										Mit freundlichen Grüßen
										<br />
										<br />
										<br />
										<br />
										Monika Mustermann
										<br />
										Anlagen
									</span>
								</p>
							</div>
						</div>
						<div className='footer'>
							<p>
								<span data-semantic='footer-subject'>
									<span
										contentEditable={true}
										suppressContentEditableWarning={true}
										className={'border-hover letter-head-c247-footer-subject'}
									>
										Bewerbung
									</span>
								</span>{' '}
								|{' '}
								<span data-semantic='footer-name'>
									<span
										contentEditable={true}
										suppressContentEditableWarning={true}
										className={'border-hover letter-head-c247-footer-name'}
									>
										Max Mustermann
									</span>
								</span>
							</p>
						</div>
					</div>
				</div>
				{/* <!-- Resume Block End --> */}

				{/* <!-- Resume Block Start --> */}
				<div className='application-block resume-c247'>
					<div className='resume-page'>
						<div
							className='personal-data-box'
							data-semantic='personal-data-box'
						>
							<div className='block-inner'>
								<div className='my-row'>
									<div className='my-col-6'>
										<h1 className='resume-name' data-semantic='resume-name'>
											<span
												contentEditable={true}
												suppressContentEditableWarning={true}
												className={'border-hover resume-c247-name'}
											>
												Vorname
												<br />
												Nachname
											</span>
										</h1>
										<p
											className='resume-name-subline'
											data-semantic='resume-name-subline'
										>
											<span
												contentEditable={true}
												suppressContentEditableWarning={true}
												className={'border-hover resume-c247-name-subline'}
											>
												berufsbezeichnung
											</span>
										</p>

										<p
											className='resume-personal-data'
											data-semantic='resume-personal-data'
										>
											<span
												contentEditable={true}
												suppressContentEditableWarning={true}
												className={'border-hover resume-c247-personal-data'}
											>
												Geb. am XX.XX.XXXX in Musterstadt
												<br />
												Familienstand: ledig
												<br />
												Nationalität: deutsch <br />
												<br />
												Musterstraße XX, XXXXX Musterstadt
												<br />
												Telefon XXXX XXXXXXX, Mobil XXXX XXXXX
												<br />
												M.Mustermann@domain.de
											</span>
										</p>
									</div>

									<div className='my-col-6'>
										<img src='https://via.placeholder.com/285x285' alt='' />
									</div>
								</div>
							</div>
						</div>

						<div className='description-box'>
							<div className='block-inner'>
								<h1 className='headline-1' data-semantic='headline-1'>
									<span
										contentEditable={true}
										suppressContentEditableWarning={true}
										className={'border-hover resume-c247-headline-1'}
									>
										Berufserfahrung
									</span>
								</h1>
							</div>
							<div className='block-inner'>
								<div className='description-item'>
									<div
										className='resume-work-experience'
										data-semantic='resume-work-experience'
									>
										<div
											className='type description-block'
											data-semantic='type'
										>
											<span
												contentEditable={true}
												suppressContentEditableWarning={true}
												className={'border-hover resume-c247-headline-1'}
											>
												Seit 00/2000
											</span>
										</div>
										<div className='description-block'>
											<p className='description' data-semantic='description'>
												<span
													contentEditable={true}
													suppressContentEditableWarning={true}
													className={'border-hover resume-c247-description'}
												>
													Stellenbezeichnung
												</span>
											</p>
											<p
												className='description-subline'
												data-semantic='description-subline'
											>
												<span
													contentEditable={true}
													suppressContentEditableWarning={true}
													className={'border-hover'}
												>
													Firmenname, Ort, Abteilung
												</span>
											</p>
											<div
												contentEditable={true}
												suppressContentEditableWarning={true}
												className={'border-hover'}
											>
												<ul className='details' data-semantic='details'>
													<li>
														Hier stehen Ihre Aufgaben, Tätigkeiten und Erfolge
													</li>
													<li>
														Hier stehen Ihre Aufgaben, Tätigkeiten und Erfolge
													</li>
													<li>
														Hier stehen Ihre Aufgaben, Tätigkeiten und Erfolge
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>

								<div className='description-item'>
									<div
										className='resume-education'
										data-semantic='resume-education'
									>
										<div
											className='type description-block'
											data-semantic='type'
										>
											00/2000 – 00/2000
										</div>
										<div className='description-block'>
											<p className='description' data-semantic='description'>
												Bezeichnung Studium/Ausbildung, Hochschule/Firma
											</p>
											<ul className='details unstyled' data-semantic='details'>
												<li>Schwerpunkt:</li>
												<li>Abschlussarbeit: </li>
												<li>Abschluss:</li>
											</ul>
										</div>
									</div>
								</div>

								<div className='description-item'>
									<div
										className='resume-service'
										data-semantic='resume-service'
									>
										<div
											className='type description-block'
											data-semantic='type'
										>
											00/2000 – 00/2000
										</div>
										<div className='description-block'>
											<ul className='details unstyled' data-semantic='details'>
												<li>Wehrdienst/Zivildienst/Bundesfreiwilligendienst</li>
												<li>Beschreibung, Ort</li>
											</ul>
										</div>
									</div>
								</div>

								<div className='description-item'>
									<div
										className='resume-education'
										data-semantic='resume-education'
									>
										<div
											className='type description-block'
											data-semantic='type'
										>
											00/2000 – 00/2000
										</div>
										<div className='description-block'>
											<ul className='details unstyled' data-semantic='details'>
												<li>
													Name der Schule (Gymnasium, Realschule, Hauptschule)
												</li>
												<li>Abschluss</li>
											</ul>
										</div>
									</div>
								</div>

								<div className='description-item'>
									<div
										className='resume-further-education'
										data-semantic='resume-further-education'
									>
										<div
											className='type description-block'
											data-semantic='type'
										>
											00/2000 – 00/2000
										</div>
										<div className='description-block'>
											<ul className='details unstyled' data-semantic='details'>
												<li>Bezeichnun der Weiterbildung</li>
												<li>Zusatzinformation, Dauer der Weiterbildung</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='footer'>
							<p>
								<span data-semantic='footer-subject'>Bewerbung</span> |{' '}
								<span data-semantic='footer-name'>Max Mustermann</span>
							</p>
						</div>
					</div>
				</div>
				{/* <!-- Resume Block End --> */}

				{/* <!-- Resume Block Start --> */}
				<div className='application-block'>
					<div className='resume-page'>
						<div className='description-box'>
							<div className='block-inner'>
								<div className='description-item'>
									<div
										className='resume-language'
										data-semantic='resume-language'
									>
										<div
											className='type description-block'
											data-semantic='type'
										>
											Sprachen
										</div>
										<div className='description-block'>
											<ul className='details unstyled' data-semantic='details'>
												<li>Sprache (Kenntnisstand bewerten)</li>
												<li>Sprache (Kenntnisstand bewerten)</li>
											</ul>
										</div>
									</div>
								</div>

								<div className='description-item'>
									<div className='resume-edv' data-semantic='resume-edv'>
										<div
											className='type description-block'
											data-semantic='type'
										>
											EDV
										</div>
										<div className='description-block'>
											<ul className='details unstyled' data-semantic='details'>
												<li>Programm (Kenntnisstand bewerten)</li>
												<li>Programm (Kenntnisstand bewerten)</li>
											</ul>
										</div>
									</div>
								</div>

								<div className='description-item'>
									<div
										className='resume-knowledge'
										data-semantic='resume-knowledge'
									>
										<div
											className='type description-block'
											data-semantic='type'
										>
											Weitere Kenntnisse
										</div>
										<div className='description-block'>
											<ul className='details unstyled' data-semantic='details'>
												<li>Kenntnis (Kenntnisstand bewerten)</li>
												<li>Kenntnis (Kenntnisstand bewerten)</li>
											</ul>
										</div>
									</div>
								</div>

								<div className='description-item'>
									<div className='resume-hobbys' data-semantic='resume-hobbys'>
										<div
											className='type description-block'
											data-semantic='type'
										>
											Hobbys
										</div>
										<div className='description-block'>
											<ul className='details unstyled' data-semantic='details'>
												<li>Hobby 1, Hobby 2, Hobby 3, Hobby 4</li>
											</ul>
										</div>
									</div>
								</div>

								<div className='description-item'>
									<div
										className='resume-engagement'
										data-semantic='resume-engagement'
									>
										<div
											className='type description-block'
											data-semantic='type'
										>
											Engagement
										</div>
										<div className='description-block'>
											<ul className='details unstyled' data-semantic='details'>
												<li>Ehrenamt/Soziales Engagement etc.</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='resume-date' data-semantic='resume-date'>
							<div className='block-inner'>
								<p>
									Wohnort,
									<br />
									Tag.Monat.Jahr
								</p>
							</div>
						</div>

						<div className='footer'>
							<p>
								<span data-semantic='footer-subject'>Bewerbung</span> |{' '}
								<span data-semantic='footer-name'>Max Mustermann</span>
							</p>
						</div>
					</div>
				</div>
				{/* <!-- Resume Block End --> */}

				{/* <!-- Resume Block Start --> */}
				<div className='application-block'>
					<div className='attachment-page'>
						<div className='attachment-heading'>
							<div className='block-inner'>
								<h1
									className='attachments-chapter'
									data-semantic='attachments-chapter'
								>
									Anlagenverzeichnis
								</h1>
							</div>
						</div>

						<div className='block-inner'>
							<div className='attachment-box'>
								<h1 className='headline-1' data-semantic='headline-1'>
									Berufserfahrung
								</h1>

								<div className='attachment-block'>
									<ul
										className='attachments-certificate-employment'
										data-semantic='attachments-certificate-employment'
									>
										<li>Arbeitszeugnis, Unternehmen, Ort</li>
										<li>Arbeitszeugnis, Unternehmen, Ort</li>
										<li>Arbeitszeugnis, Unternehmen, Ort</li>
									</ul>
								</div>

								<div className='attachment-block'>
									<ul
										className='attachments-certificate-education'
										data-semantic='attachments-certificate-education'
									>
										<li>Zeugnis, Bildungseinrichtung, Ort</li>
										<li>Zeugnis, Bildungseinrichtung, Ort</li>
										<li>Zeugnis, Bildungseinrichtung, Ort</li>
									</ul>
								</div>

								<div className='attachment-block'>
									<ul
										className='attachments-certificate-further-education'
										data-semantic='attachments-certificate-further-education'
									>
										<li>Bezeichnung der Weiterbildung</li>
										<li>Bezeichnung der Weiterbildung</li>
										<li>Bezeichnung der Weiterbildung</li>
									</ul>
								</div>
							</div>
						</div>

						<div className='footer'>
							<p>
								<span data-semantic='footer-subject'>Bewerbung</span> |{' '}
								<span data-semantic='footer-name'>Max Mustermann</span>
							</p>
						</div>
					</div>
				</div>
				{/* <!-- Resume Block End --> */}
			</div>
		
             </div>
            </Container>
          </>
      );
    }
}

export default PdfPageComponents;