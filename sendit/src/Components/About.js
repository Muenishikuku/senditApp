import React from 'react';
import "./About.css";
import pic from "../assets/pic.svg";
import amico from "../assets/amico.svg";
import address from "../assets/address.svg";

const AboutUs = () => {
  return (
    <div className="mt-20 ">
      <div className="about-us-content sm:px-2">
        <h2 className="text-3xl text-start text-purple-700 font-bold font-primary mb-4">
            Welcome to SendiT Delivery
        </h2>
        <p className="mb-6 text-gray-800">
            SendiT is a courier service that helps users deliver parcels to different destinations. SendiT provides courier quotes based on weight categories. Whether you need to send small packages or larger shipments, SendiT ensures a reliable and efficient delivery experience.
        </p>
        <div className='section mt-20'>
            <div className='text'>
                <h3 className="text-2xl font-primary mb-2 font-semibold text-purple-500 mt-36">Our Mission</h3>
                <p className="text-gray-800">
                    At SendiT, our mission is to provide a seamless and dependable courier service for individuals and businesses alike. We strive to make parcel delivery hassle-free by offering transparent pricing based on weight, ensuring that your packages reach their destinations safely and on time.
                </p>
            </div>
            <div className='image1 ml-10 flex justify-center'>
                <img src={pic} alt="3" className="w-full h-auto" />
            </div>
        </div>

        <div className='section mt-20'>
        <div className='text'>
            <h3 className="text-2xl font-primary mb-2 text-purple-500 font-semibold mt-32">The SendiT Experience</h3>
            <p className="text-gray-800">
              What sets the SendiT experience apart is our commitment to reliable and affordable parcel delivery. Users can easily calculate shipping costs based on weight categories, track their packages in real-time, and enjoy the convenience of a user-friendly platform that simplifies the entire delivery process.
            </p>
          </div>
          <div className='image2 ml-10 flex justify-center'>
            <img src={amico} alt="2" className="w-full h-auto" />
          </div>
        </div>

        <div className='section mt-40'>
          <div className='text'>
            <div className="highlighted-section">
              <h3 className="text-2xl font-primary mb-2 text-purple-700 font-semibold mt-10">Why Choose SendiT?</h3>
              <ul className="text-gray-800">
                <li>
                  <strong className="">Dependable Courier Service:</strong> <br />We offer a reliable and efficient courier service to ensure your parcels reach their destination securely.
                </li>
                <li className='mt-2'>
                  <strong className="">Transparent Pricing:</strong> <br />SendiT provides courier quotes based on weight categories, offering transparent and competitive pricing for your shipping needs.
                </li>
                <li className='mt-2'>
                  <strong className="">Real-time Package Tracking:</strong><br /> Stay informed about the status of your packages with our real-time tracking feature.
                </li>
                <li className='mt-2'>
                  <strong className="">User-Friendly Platform:</strong> Our user-friendly platform makes it easy to calculate shipping costs, book deliveries, and manage your shipments with ease.
                </li>
              </ul>
            </div>
          </div>
          <div className='image3 ml-10 flex justify-center'>
            <img src={address} alt="about" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;