import './about.css'

const About = () => {
    return (
        <div className='lg:grid grid-cols-2 mt-20 '>
            <div className="image-container">
            
                    <img src="https://i.ibb.co/znZkW0H/annie-spratt-h-Cb3l-IB8-L8-E-unsplash.jpg" alt="Image 2" className="image image1" />
                    <img src="https://i.ibb.co/GP1RKmD/headway-5-Qg-Iuu-Bx-Kw-M-unsplash.jpg" alt="Image 1" className="image image2" />
                
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