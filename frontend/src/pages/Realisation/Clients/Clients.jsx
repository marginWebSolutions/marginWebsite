import Section from '../../../layout/Section/Section';
import ClientsCard from '../ClientsCard/ClientsCard';
import './Clients.scss';

export default function Clients() {
	return (
		<Section className="clients" isHero={true}>
			<div className="clients__content">
				<h1 className="clients__content--title">
					Ils nous ont fait confiance
				</h1>
				<div className="clients__content__cards">
					<ClientsCard
						href="https://www.google.com"
						src="https://picsum.photos/350/250"
						alt="logo"
						text="placeholder"
					/>
					<ClientsCard
						href="https://www.google.com"
						src="https://picsum.photos/350/250"
						alt="logo"
						text="placeholder"
					/>
					<ClientsCard
						href="https://www.google.com"
						src="https://picsum.photos/350/250"
						alt="logo"
						text="placeholder"
					/>
				</div>
			</div>
		</Section>
	);
}
