import { Link } from "react-router-dom";


const Service = ({ service }) => {
    const { id, name, title,image,price,short_description } = service
    return (
        <>
            <div>
                <div className="card w-96 h-80 bg-black border-2 border-red-100 shadow-xl ">
                    <figure className="w-36 px-10 pt-10">
                        <img src={image} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body  ">
                        <h2 className="card-title">{name}</h2>
                        <p className="font-light">{title}</p>
                        <p>{short_description}</p>
                        <div className="card-actions">
                            <Link><u>Read More </u><i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;