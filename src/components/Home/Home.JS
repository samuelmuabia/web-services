import useServices from '../../hook/useServices';
import useWorks from '../../hook/useWorks';

import Service from '../Service/Service';
import Works from '../Works/Works';


const Home = () => {
    const [services, setService] = useServices();
    const [works, setWork] = useWorks();
    return (
        <div className='container'>
            <div className=' row mx-auto my-5'>
                <div className="details col col-12 col-lg-6 my-auto text-end">
                    <h1 className='lh-1 fs-1  '>Your Total Web Solutions <br></br>is Here</h1>
                    <p>I have expertise in Web Development, Outsourcing, Web Design,Graphic Design, Web/Domain Hosting, U/UX Design, YouTube Marketing,Search Engine Optimization to achieve high professional standard.</p>
                </div>
                <div className="image col col-12 col-lg-6 ">
                    <img className='img-fluid' src="images/home-image.png" alt="" />
                </div>
            </div>
            <section className='mb-5' id="services">
                <h1 className='text-center my-4'>Services</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {services.map(service => <Service service={service} key={service.id}></Service>)}
                </div>
            </section>
            <section className='mb-5' id='works'>
                <h1 className='text-center my-4'>Recent Works</h1>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {works.map(work => <Works work={work} key={work.id}></Works>)}

                </div>
            </section>

        </div>
    );
};

export default Home;
