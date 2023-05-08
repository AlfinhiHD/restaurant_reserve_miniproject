import { useState } from "react";
import resto from "../../assets/resto.jpg";
import { useQuery } from "@apollo/client";
import { GetMenuData } from "../../helpers/gqlHasura";

const Carousel = () => {
    
    const { data } = useQuery(GetMenuData)

    return (
        <div
            id="carouselExampleCaptions"
            className="carousel slide mt-5"
            data-bs-ride="false"
            style={{ width: "1000px" }}
        >
            <div className="carousel-indicators">
                {data?.menu.map((slide, index) => (
                    <button
                        style={{color:"#B1464A"}}
                        key={slide.menu_id}
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={index}
                        className={index === 0 ? "active" : ""}
                        aria-current={index === 0 ? "true" : "false"}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>
            <div className="carousel-inner">
                {data?.menu.map((slide, index) => (
                    <div key={slide.menu_id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                        <img style={{filter: "brightness(60%)"}} src={slide.image} className="d-block w-100" alt={`Slide ${index + 1}`} />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>{slide.menu_name}</h3>
                            <h5 className="text-white">${slide.price}</h5>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;