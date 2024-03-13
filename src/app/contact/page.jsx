import Head from 'next/head';

const ContactPage = () => {
// pages/contact.js

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* <Head>
        <title>Contact Us - GUIDING HANDS CARE SERVICES</title>
        <meta name="description" content="Contact us to discuss any questions you have regarding our care and services. A complimentary consultation is available." />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-semibold text-center mb-6">Contact Us</h1>
        <p className="text-lg text-center mb-6">Call (281) 758-9752 or email guidinghandscareservices@gmail.com to discuss any questions that you have regarding our care and services. A complimentary on-site or virtual consultation is available to you at your convenience.</p>

        {/* Contact Form */}
        <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4 border-b-2 border-gray-50 flex flex-col gap-3">
            <label htmlFor="name" className="block text-gray-500 font-normal text-sm">Name</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md outline-none" />
          </div>
          <div className="mb-4 border-b-2 border-gray-50 flex flex-col gap-3">
            <label htmlFor="phone" className="block text-gray-500 font-medium text-sm">Phone</label>
            <input type="tel" id="phone" name="phone" className="mt-1 block w-full outline-none" />
          </div>
          <div className="mb-4 border-b-2 border-gray-50 flex flex-col gap-3">
            <label htmlFor="email" className="block text-gray-500 font-medium text-sm">Email</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full outline-none" />
          </div>
          <div className="mb-4 border-b-2 border-gray-50 flex flex-col gap-3">
            <label htmlFor="message" className="block text-gray-500 font-medium text-sm">Message</label>
            <textarea id="message" name="message" rows="4" className="mt-1 block w-full outline-none"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="px-4 py-2 bg-[#243928] text-[#DCF28C] font-semibold rounded-md">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default ContactPage