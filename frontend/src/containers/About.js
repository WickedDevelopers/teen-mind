import React, { useState, useEffect, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import House from '../assets/images/joba3 (2).jpg';

const About = () => {
	const [topSeller, setTopSeller] = useState([]);
	const [realtors, setRealtors] = useState([]);

	useEffect(() => {
		axios.defaults.headers = {
			'Content-Type': 'application/json',
		};

		const getTopSeller = async () => {
			try {
				const res = await axios.get(
					`http://localhost:8000/api/realtors/topseller`
				);
				setTopSeller(res.data);
			} catch (err) {}
		};

		getTopSeller();
	}, []);

	useEffect(() => {
		axios.defaults.headers = {
			'Content-Type': 'application/json',
		};

		const getRealtors = async () => {
			try {
				const res = await axios.get(`http://localhost:8000/api/realtors/`);
				setRealtors(res.data);
			} catch (err) {}
		};

		getRealtors();
	}, []);

	const getAllRealtors = () => {
		let allRealtors = [];
		let results = [];

		realtors.map((realtor) => {
			return allRealtors.push(
				<Fragment key={realtor.id}>
					<div className='about__display'>
						<img className='about__display__image' src={realtor.photo} alt='' />
					</div>
					<h3 className='about__realtor'>{realtor.name}</h3>
					<p className='about__contact'>{realtor.phone}</p>
					<p className='about__contact'>{realtor.email}</p>
					<p className='about__about'>{realtor.description}</p>
				</Fragment>
			);
		});

		for (let i = 0; i < realtors.length; i += 3) {
			results.push(
				<div key={i} className='row'>
					<div className='col-1-of-3'>{allRealtors[i]}</div>
					<div className='col-1-of-3'>
						{allRealtors[i + 1] ? allRealtors[i + 1] : null}
					</div>
					<div className='col-1-of-3'>
						{allRealtors[i + 2] ? allRealtors[i + 2] : null}
					</div>
				</div>
			);
		}

		return results;
	};

	const getTopSeller = () => {
		let result = [];

		topSeller.map((seller) => {
			return result.push(
				<Fragment key={seller.id}>
					<div className='about__display'>
						<img className='about__display__image' src={seller.photo} alt='' />
					</div>
					<h3 className='about__topseller'>Top Seller:</h3>
					<p className='about__realtor'>{seller.phone}</p>
					<p className='about__contact'>{seller.phone}</p>
					<p className='about__contact'>{seller.email}</p>
					<p className='about__about'>{seller.description}</p>
				</Fragment>
			);
		});

		return result;
	};

    return (
        <main className='about'>
            <Helmet>
                <title>Realest Estate - About</title>
                <meta name='description' content='About us' />
            </Helmet>
            <header className='about__header'>
                <h1 className='about__heading'>About Realest Estate</h1>
            </header>
            <section className='about__info'>
                <div className='row'>
                    <div className='col-3-of-4'>
                        <h2 className='about__subheading'>We find the perfect home for you</h2>
                        <p className='about__paragraph'>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, est alias at ipsam porro molestiae, nesciunt dignissimos quia eius voluptatem corporis ratione corrupti! Rerum veritatis laborum doloremque aliquid et obcaecati, Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ullam, distinctio dolorum numquam porro aut ab fugiat voluptatibus reprehenderit, nulla quidem. Repellendus, quos. Earum esse molestias ea nihil ipsum eaque.
                        </p>
                        <div className='about__display'>
                            <img className='about__display__image' src={House} alt='' />
                        </div>
                        <p className='about__paragraph'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis dolorem obcaecati, porro possimus a temporibus sed beatae cupiditate perferendis hic doloribus? Voluptates earum ullam quos sequi iusto, perferendis necessitatibus quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dicta dolorum, tempora recusandae facilis beatae totam reprehenderit reiciendis blanditiis voluptatem illum voluptatibus illo alias pariatur nisi optio rerum nesciunt ipsa.
                        </p>
                    </div>
                    <div className='col-1-of-4'>
                        {getTopSeller()}
                    </div>
                </div>
            </section>
            <section className='about__team'>
                <div className='row'>
                    <h2 className='about__subheading'>Meet our awesome team!</h2>
                </div>
                {getAllRealtors()}
            </section>
        </main>
    );
};

export default About;
