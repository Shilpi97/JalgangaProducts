import React from 'react';
import web from "../src/images/roundstopper.jpg";
import Card from './Card';
import Pdata from './Pdata';

const Product = () => {
    return (<> 
        <div className="my-3">
            <h3 className="text-center navbar-brand font-weight-bolder"> Our Products</h3>
        </div>
        <div className="container-fluid mb-5">
            <div className='row'>
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {
                            Pdata.map((val, ind) => {
                                return <Card key = {ind} imgsrc = {val.imgsrc} title= {val.title} detail= {val.detail}
                                />;
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Product;