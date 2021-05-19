import { React } from 'react';
import { Button } from 'react-bootstrap';
import './style.css'


function Category() {
    return (
        <div className="category-wrap">
            <div className="category-left">
                <div className="category-link">
                    <Button>TẤT CẢ</Button>
                </div>
                <div className="category-link">
                    <Button>GTA V</Button>
                </div>
                <div className="category-link">
                    <Button>PUBG</Button>
                </div>
            </div>
            <div className="category-right">
                <div className="category-link">
                    <Button>SẴN SÀNG</Button>
                </div><div className="category-link">
                    <Button>ĐANG ĐƯỢC THUÊ</Button>
                </div>
            </div>
        </div>
    )
}

export default Category;