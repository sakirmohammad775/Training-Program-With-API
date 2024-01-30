import { useLoaderData, useParams } from "react-router-dom";



const Details = () => {
    const services=useLoaderData()
    const { id } = useParams()
    const service=services.find(service=>service.id==id)
    console.log(id,service);
    return (
        <div>
            <h3>hello</h3>
            <p>{id}</p>
            <p>details:{service.title}</p>
        </div>
    );
};

export default Details;