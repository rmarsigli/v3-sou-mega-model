import HomeMega from '../partials/HomeMega';
import HomeKids from '../partials/HomeKids';
import HomeSeletiva from '../partials/HomeSeletiva';
import Testimonials from '../components/Testimonials';
import Jobs from '../components/Jobs';

export default function Home () {
	const pageType = process.env.REACT_APP_PAGE_TYPE;
	
	return (
		<main id="main">
			{pageType === 'kids' ? <HomeKids /> : 
				pageType === 'seletiva' ? <HomeSeletiva /> : 
					<HomeMega />}

			{pageType !== 'kids' && (
				<>
					<Jobs />
					<Testimonials />
				</>
			)}
		</main>
	);
}
