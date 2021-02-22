import React from 'react'

const ContactForm = () => {

  const handleSubmit = ( evt ) => {
    evt.preventDefault();
    console.log('form submiting ', evt.target)
  }
  
  return ( 
    <form onSubmit={handleSubmit}>
      <h2 className="mb-8 text-2xl font-bold">
        Write your query about the course or Course Cube.
      </h2>

      <label
        className="block mb-2 text-xs font-bold uppercase"
        htmlFor="first-name"
      >
        Your name
      </label>

      <input
        className="w-full mb-6 rounded-md border-gray-800"
        id="first-name"
        placeholder="Bill"
        type="text"
      />

      <label
        className="block mb-2 text-xs font-bold uppercase"
        htmlFor="last-name"
      >
        Your email
      </label>

      <input
        className="w-full mb-6 rounded-md border-gray-800"
        id="last-name"
        placeholder="Murray"
        type="text"
      />

      <label
        className="block mb-2 text-xs font-bold uppercase"
        htmlFor="message"
      >
        Message
      </label>

      <textarea
        className="w-full mb-6 rounded-md border-gray-800"
        id="message"
        placeholder="Say something..."
        rows="8"
      />

      <button className="px-4 py-2 text-sm font-bold text-white bg-gray-700 border-b-4 border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600">
        Submit
      </button>
    </form>
   );
}
 
export default ContactForm;