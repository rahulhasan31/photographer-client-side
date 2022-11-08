import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';


const ServicesDetails = () => {
    const {_id , price,img, description, title }= useLoaderData()
    const {user}= useContext(AuthContext)

    const handlePlaceSubmit= event=>{
       event.preventDefault()
       const form=event.target
       const name= `${form.name.value} `
       const email= user?.email || 'unregister'
       const photo= user?.photoURL|| 'no photo'
       const message=form.message.value

       const order= {
         service:_id,
         serviceName: title,
         price,
       customer: name,
         photo,
         email,
         message

       }
    }
    

    return (
        <div className='grid grid-cols-1 '>
              
            <div className="card lg:card-side bg-base-100 shadow-xl mb-10">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}!</h2>
    <p className='card-title text-red-700'>price: ${price}</p>
    <p>{description}</p>

    <div className="card-actions">
       <Link to={`/reviews`}><button className="btn btn-primary">My Reviews</button></Link>
    </div>
  </div>
</div>

      <div className='grid grid-cols-1  mt-6 gap-10'>
      <form onClick={handlePlaceSubmit}>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        <input name='name' type="name" readOnly defaultValue={user?.displayName} placeholder="Type here" className="input input-bordered w-full " />
       <input name='email' type="email" readOnly defaultValue={user?.email} placeholder="Type here" className="input input-bordered w-full " />
       <input name='photo' type="photo" placeholder="Type here" className="input input-bordered w-full " />
       <input type="text" placeholder="Type here" className="input input-bordered w-full " />
        </div>
        <br />
        <div className='mb-5'>
        <textarea name='message' className="textarea textarea-bordered h-24 w-full" placeholder="Your Reviews"></textarea>
        <input className="btn btn-wide btn-warning" type="submit" value="Send Your Reviews" />
        </div>
       </form>
      </div>

        </div>
    );
};

export default ServicesDetails;