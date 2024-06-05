import Engagement from '../../components/Engagement/Engagement';
import Hero from '../../components/Hero/Hero';
import Presentation from '../../components/Presentation/Presentation';

export default function Home() {
	return (
		<>
			<Hero />
			<div className="underline"></div>
			<Presentation />
			<div className="underline"></div>
			<Engagement />
			<div className="underline"></div>
		</>
	);
}
