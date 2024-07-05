/* eslint-disable react/no-unescaped-entities */
import Section from '../../layout/Section/Section';
import './MentionsLegales.scss';

export default function MentionsLegales() {
	return (
		<Section className="mentions__legales">
			<h1 className="mentions__legales--title">Mentions légales</h1>
			<div className="mentions__legales__content">
				<h2 className="mentions__legales--subtitle">
					1. Présentation du site
				</h2>
				<p className="mentions__legales--text">
					En vertu de{' '}
					<a
						href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000801164#LEGIARTI000042038977"
						className="mentions__legales--link"
					>
						l'article 6 de la loi n° 2004-575 du 21 juin 2004
					</a>{' '}
					pour la confiance dans l'économie numérique, il est précisé
					aux utilisateurs du site internet{' '}
					<span className="bolder">https://www.margin-web.com</span>{' '}
					l'identité des différents intervenants dans le cadre de sa
					réalisation et de son suivi:
				</p>
				<p className="mentions__legales--text">
					<span className="bolder">Nom du site</span> : margin-web
				</p>
				<p className="mentions__legales--text">
					<span className="bolder">URL du site</span> :
					https://www.margin-web.com
				</p>
				<div className="mentions__legales--owners">
					<p className="mentions__legales--text">
						<span className="bolder">Propriétaires</span> :
					</p>
					<div className="mentions__legales--owner">
						<p className="mentions__legales--text">
							Adrien Blanco, EI
						</p>
						<p className="mentions__legales--text">
							Adresse : 5 impasse Jean Guiton, 42530
							Saint-Genest-Lerpt
						</p>
						<p className="mentions__legales--text">
							Email : contact@margin-web.com
						</p>
					</div>
					<div className="mentions__legales--owner">
						<p className="mentions__legales--text">
							Marc Villevieille, EI
						</p>
						<p className="mentions__legales--text">
							Adresse : 14 C Rue Saint Louis, 58600 Fourchambault
						</p>
						<p className="mentions__legales--text">
							Email : contact@margin-web.com
						</p>
					</div>
				</div>
				<div className="mentions__legales--hosting">
					<p className="mentions__legales--text">
						<span className="bolder">Hébergement</span> :
					</p>
					<div className="mentions__legales--host">
						<p className="mentions__legales--text">
							Le site est hébergé par : OVH
						</p>
						<p className="mentions__legales--text">OVH SAS</p>
						<p className="mentions__legales--text">
							Adresse : 2 rue Kellermann - BP 80157 - 59053
							Roubaix Cedex 1
						</p>
						<p className="mentions__legales--text">
							Téléphone : 1007
						</p>
					</div>
				</div>
				<h2 className="mentions__legales--subtitle">
					2. Conditions générales d'utilisation du site et des
					services proposés
				</h2>
				<p className="mentions__legales--text">
					L’utilisation du site{' '}
					<span className="bolder">https://www.margin-web.com</span>{' '}
					implique l’acceptation pleine et entière des conditions
					générales d’utilisation ci-après décrites. Ces conditions
					d’utilisation sont susceptibles d’être modifiées ou
					complétées à tout moment, les utilisateurs du site{' '}
					<span className="bolder">https://www.margin-web.com</span> sont
					donc invités à les consulter de manière régulière.
				</p>
				<h2 className="mentions__legales--subtitle">
					3. Description des services fournis
				</h2>
				<p className="mentions__legales--text">
					Le site{' '}
					<span className="bolder">https://www.margin-web.com</span> a
					pour objet de fournir une information concernant l’ensemble
					des activités de la société. Les propriétaires du site
					s’efforcent de fournir sur le site{' '}
					<span className="bolder">https://www.margin-web.com</span> des
					informations aussi précises que possible. Toutefois, ils ne
					pourront être tenus responsables des omissions, des
					inexactitudes et des carences dans la mise à jour, qu’elles
					soient de leur fait ou du fait des tiers partenaires qui
					leur fournissent ces informations.
				</p>
				<h2 className="mentions__legales--subtitle">
					4. Propriété intellectuelle et contrefaçons
				</h2>
				<p className="mentions__legales--text">
					Les propriétaires du site{' '}
					<span className="bolder">https://www.margin-web.com</span> sont
					propriétaires des droits de propriété intellectuelle ou
					détiennent les droits d’usage sur tous les éléments
					accessibles sur le site, notamment les textes, images,
					graphismes, logo, icônes, sons, logiciels.
				</p>
				<p className="mentions__legales--text">
					Toute reproduction, représentation, modification,
					publication, adaptation de tout ou partie des éléments du
					site, quel que soit le moyen ou le procédé utilisé, est
					interdite, sauf autorisation écrite préalable.{' '}
				</p>
				<p className="mentions__legales--text">
					Toute exploitation non autorisée du site ou de l’un
					quelconque des éléments qu’il contient sera considérée comme
					constitutive d’une contrefaçon et poursuivie conformément
					aux dispositions des articles{' '}
					<a
						href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032655082"
						className="mentions__legales--link"
					>
						L.335-2 et suivants du Code de Propriété Intellectuelle
					</a>
					.
				</p>
				<h2 className="mentions__legales--subtitle">
					5. Limitations de responsabilité
				</h2>
				<p className="mentions__legales--text">
					Les propriétaires du site ne pourront être tenus
					responsables des dommages directs et indirects causés au
					matériel de l’utilisateur, lors de l’accès au site{' '}
					<span className="bolder">https://www.margin-web.com</span>, et
					résultant soit de l’utilisation d’un matériel ne répondant
					pas aux spécifications indiquées, soit de l’apparition d’un
					bug ou d’une incompatibilité.
				</p>
				<h2 className="mentions__legales--subtitle">
					6. CNIL et gestion des données personnelles
				</h2>
				<p className="mentions__legales--text">
					Les propriétaires du site{' '}
					<span className="bolder">https://www.margin-web.com</span>{' '}
					s’engagent à ce que la collecte et le traitement de vos
					données, effectués à partir du site{' '}
					<span className="bolder">https://www.margin-web.com</span>,
					soient conformes au règlement général sur la protection des
					données (RGPD) et à la loi Informatique et Libertés. Chaque
					formulaire limite la collecte des données personnelles au
					strict nécessaire et indique notamment :
				</p>
				<ul className="mentions__legales--list">
					<li className="mentions__legales--list-item">
						quels sont les objectifs du recueil de ces données
					</li>
					<li className="mentions__legales--list-item">
						si ces données sont obligatoires ou facultatives pour la
						gestion de votre demande
					</li>
					<li className="mentions__legales--list-item">
						qui pourra en prendre connaissance (uniquement{' '}
						<span className="bolder">https://www.margin-web.com</span>{' '}
						en principe, sauf précision dans le formulaire
						lorsqu’une transmission à un tiers est nécessaire à la
						gestion de votre demande)
					</li>
					<li className="mentions__legales--list-item">
						vos droits Informatique et Libertés et la façon de les
						exercer auprès de{' '}
						<span className="bolder">https://www.margin-web.com</span>
					</li>
				</ul>
				<h2 className="mentions__legales--subtitle">
					7. Liens hypertextes
				</h2>
				<p className="mentions__legales--text">
					Le site{' '}
					<span className="bolder">https://www.margin-web.com</span>{' '}
					contient des liens hypertextes vers d’autres sites et dégage
					toute responsabilité à propos de ces liens externes ou des
					liens créés par d’autres sites vers{' '}
					<span className="bolder">https://www.margin-web.com</span>.
				</p>
				<h2 className="mentions__legales--subtitle">
					8. Droit applicable et attribution de juridiction
				</h2>
				<p className="mentions__legales--text">
					Tout litige en relation avec l’utilisation du site{' '}
					<span className="bolder">https://www.margin-web.com</span> est
					soumis au droit français. En dehors des cas où la loi ne le
					permet pas, il est fait attribution exclusive de juridiction
					aux tribunaux compétents de{' '}
					<span className="bolder">Saint Etienne</span>.
				</p>
			</div>
		</Section>
	);
}
