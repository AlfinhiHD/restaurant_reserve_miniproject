import { useState } from 'react';
import './Sidebar.css'
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const userString = sessionStorage.getItem("user");
    const user = JSON.parse(userString);

    const navigate = useNavigate();

    const [activeIndex, setActiveIndex] = useState(0);

    const handleItemClick = (event, index) => {
        event.preventDefault();
        setActiveIndex(index);
        if (index === 0) {
            navigate('/dashboard');
        } else if (index === 1) {
            navigate('/menu');
        } else if (index === 2) {
        navigate('/reserveform');
        }
    };


    // handle logout process
    const handleLogout = () => {
        if (user.usertoken) {
            //remove token from localStorage
            sessionStorage.removeItem("user");
            // redirect to login page
            navigate('/')
        }
    }

    return (
        <>
            <div className="sidebar" style={{ height: 600, backgroundColor: "#FFF0DE", borderRadius: "50px" }}>
                <h3 className='d-flex justify-content-center'>奈舞芭流</h3>
                <div className="list-group mt-5">
                    <a href='' className={`list-group-item ${activeIndex === 0 ? 'active' : ''}`} onClick={(e) => handleItemClick(e, 0)}>
                        Dashboard
                    </a>
                    <a href='' className={`list-group-item ${activeIndex === 1 ? 'active' : ''}`} onClick={(e) => handleItemClick(e, 1)}>
                        Our Menu
                    </a>
                    <a href='' className={`list-group-item ${activeIndex === 2 ? 'active' : ''}`} onClick={(e) => handleItemClick(e, 2)}>
                        Reserve
                    </a>

                    <div style={{ height: 350 }} className="d-flex align-items-end justify-content-center">
                        <a href="" onClick={handleLogout} className='list-group-item'>Logout</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Sidebar