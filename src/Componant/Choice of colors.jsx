import React from 'react';

const ChoiceOfColors = () => {
    return (
        <>
<section className='text-center m-m-auto  py-3 '>
  <div className="spinner-grow text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow text-secondary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow text-success" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow text-danger" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow text-warning" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow text-info" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow text-light" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow text-dark" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <h2 className='text-center'> together to coordinate clothes together  </h2>
</section>

        <div className='py-3'  >
            <div className="container">
                <div className='row'>
                    <div className="col-md-3">
                        <div className="card p-3  ">
                            <img src={require('../تنسيق-ألوان١.jpeg')} alt="" />
                            <h2 className='text-center' > lead coordination with white </h2>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card p-3 m-3 ">
                            <img src={require('../تنسيق-ملابس-الرجال2.jpg')} alt="" />
                            <h2 className='text-center' > off-white with the jeans </h2>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card p-3 m-3 ">
                            <img src={require('../3images.jpg')} alt="" />
                            <h2 className='text-center' >lead Aljamali with Al-kahli </h2>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card p-3 m-3 ">
                            <img src={require('../تنزيل4.jpg')} alt="" />
                            <h2 className='text-center' > the noble color with the jeans</h2>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card p-3 m-3 ">
                            <img src={require('../images5.jpg')} alt="" />
                            <h2 className='text-center' > the oil color with jeans </h2>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card p-3 m-3 ">
                            <img src={require('../6images.jpg')} alt="" />
                            <h2 className='text-center' > the milky color with beige </h2>
                        </div>
                    </div>
                  
                </div>
            </div>

        </div>


                <div>
                    <div className="container">
                        <div className="card text-center py-3 my-3  m-auto ">
                            <img src={require('../تناسق-الألوان-في-الملابس-الرجالي-7.jpg')}  height={500} className='p-3 m-2 py-2' alt="" />
                            <h2>here are some color formats</h2>
                        </div>
                    </div>
                </div>

        </>
    );
}

export default ChoiceOfColors;
