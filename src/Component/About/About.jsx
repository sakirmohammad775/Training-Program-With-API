import './about.css'

const About = () => {
    return (
        <div className='lg:grid grid-cols-2 '>
            <div className="container">
                <figure className="figure-container">
                    <img src="image\annie-spratt-hCb3lIB8L8E-unsplash.jpg" alt="Image 1" className="image1" />
                    <img src="image\headway-5QgIuuBxKwM-unsplash.jpg" alt="Image 2" className="image2" />
                </figure>
            </div>

            <div className='sm:mt-28 lg:mt-12'>
                <p className='font-thin '>About <span className='text-red-500'>Company</span></p>
                <p className='font-bold text-3xl py-5'>COMMITMENT TO QUALITY AND <span className='text-red-500'>INNOVATION</span></p>
                <p>Experience excellence with our range of services, designed to exceed expectations and provide value that goes beyond the ordinary.</p>
                <button className="mt-8 btn btn-outline">Explore</button>
            </div>
        </div>
    );
};

export default About;