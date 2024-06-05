import Engagement from '../../components/Engagement/Engagement';
import Hero from '../../components/Hero/Hero';
import Presentation from '../../components/Presentation/Presentation';
import Underline from '../../components/Underline/Underline';

export default function Home() {
	return (
		<>
			<Hero />
			<Underline />
			<Presentation />
			<Underline />
			<Engagement />
			<Underline />
		</>
	);
}
