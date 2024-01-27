import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services, setServices] = useState([]); // Correct usage of useState

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data));
        // Use setServices to update the state

    }, []);

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:justify-center my-5 gap-5 ">
            {services.map((service) => (
                <Service key={service.id} service={service} />
            ))}
        </div>
    );
};

export default Services;
