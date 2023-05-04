import { useState } from 'react';
import './Sidebar.css'
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const navigate = useNavigate();

    const [activeIndex, setActiveIndex] = useState(0);

    const handleItemClick = (event, index) => {
        event.preventDefault();
        setActiveIndex(index);
        if (index === 0) {
          navigate('/dashboard');
        } else if (index === 1) {
          navigate('/menu');
        }
      };

    return (
        <>
            <div className="sidebar" style={{ height: 600, backgroundColor: "#FFF0DE", borderRadius: "50px" }}>
                <h3 className='d-flex justify-content-center'>奈舞芭流</h3>
                <div className="list-group mt-5">
                    <a href='' className={`list-group-item ${activeIndex === 0 ? 'active' : ''}`} onClick={(e) => handleItemClick(e, 0)}>
                        Dashboard
                    </a>
                    <a href='' className={`list-group-item ${activeIndex === 1 ? 'active' : ''}`} onClick={(e) => handleItemClick(e, 1)}>
                        Reserve
                    </a>

                    <div style={{ height: 380 }} className="d-flex align-items-end justify-content-center">
                        <a href="#" className='list-group-item'>Logout</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Sidebar