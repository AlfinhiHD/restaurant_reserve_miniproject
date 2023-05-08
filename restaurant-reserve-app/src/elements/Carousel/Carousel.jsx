import { useState } from "react";
import resto from "../../assets/resto.jpg";
import { useQuery } from "@apollo/client";
import { GetMenuData } from "../../helpers/gqlHasura";
import { Oval } from  'react-loader-spinner'

const Carousel = () => {

    const { loading, data } = useQuery(GetMenuData)

    return (
        <>
            {loading ?
                <Oval
                    height={80}
                    width={80}
                    color="#4fa94d"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#4fa94d"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                />
                :
                <div style={{ width: "500px" }}>
                    {data?.menu.map((slide, index) => (
                        <div
                            id="carouselExampleCaptions"
                            className="carousel slide mt-5"
                            data-bs-ride="false"
                            key={slide.menu_id}
                        >
                            <div className="carousel-indicators">
                                <button
                                    style={{ color: "#B1464A" }}
                                    type="button"
                                    data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide-to={index}
                                    className={index === 0 ? "active" : ""}
                                    aria-current={index === 0 ? "true" : "false"}
                                    aria-label={`Slide ${index + 1}`}
                                />
                            </div>
                            <div className="carousel-inner">
                                <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                    <img style={{ filter: "brightness(60%)" }} src={slide.image} className="d-block w-100" alt={`Slide ${index + 1}`} />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h3>{slide.menu_name}</h3>
                                        <h5 className="text-white">${slide.price}</h5>
                                    </div>
                                </div>
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
                    ))}
                </div>}
        </>

    );
};

export default Carousel;