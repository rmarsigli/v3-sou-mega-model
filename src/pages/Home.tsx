import HomeMega from '../partials/HomeMega';
import HomeKids from '../partials/HomeKids';
import Testimonials from '../components/Testimonials';
import Jobs from '../components/Jobs';

export default function Home () {
	return (
		<main id="main">
			{process.env.REACT_APP_PAGE_TYPE === 'kids' ? <HomeKids /> : <HomeMega />}

			{process.env.REACT_APP_PAGE_TYPE !== 'kids' && (
				<>
					<Jobs />
					<Testimonials />
				</>
			)}
		</main>
	);
}
