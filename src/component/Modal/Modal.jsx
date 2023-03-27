import React from 'react';

const Modal = (props) => {
    console.log(props.singleData);
    const {image_link, description,features,integrations} =props.singleData;
    console.log(features)
    // console.log(Object.values(features || {}))
    // console.log(integrations)
    return (
        <div>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                <div className="card lg:card-side bg-base-100">
                    
                    <div className="card-body border-2 border-error mr-4 rounded mb-3">
                        <h2 className="card-title">{description ? description:"Not Found"}</h2>
                        <div className='flex justify-between'>
                            <div>
                                <h1 className='text-xl font-bold'>Features:</h1>
                                {
                                    Object.values(features || {}).map((value) => <li>{value.feature_name}</li>)
                                }
                            </div>
                            <div>
                            <h1 className='text-xl font-bold'>Integrations:</h1>
                            {
                               integrations && integrations.map(int => <li>{int ? int: "not found"}</li>)
                            }
                            </div>
                        </div>

                        <div className="card-actions justify-end">
            
                        </div>
                        
                    </div>
                    <figure><img className='w-full' src={image_link && image_link[0]} alt="Album"/></figure>
                    
                </div>
                    
                    <div className="modal-action">
                    <label htmlFor="my-modal-5" className="btn">Close</label>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Modal;