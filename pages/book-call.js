import Head from "next/head";

export default function BookCall() {
  return (
    <>
      <Head>
        <title>Book a Discovery Call | Helping Cloud</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-16">
        <h1 className="text-3xl font-bold mb-4">Book a Discovery Call</h1>
        <p className="mb-8 text-gray-700 max-w-xl text-center">Let's talk about your project needs, demo an existing solution, or co-create something from scratch. Fill out the form below and our team will get in touch!</p>
        <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <input className="w-full mb-4 p-2 border rounded" type="text" placeholder="Your Name" required />
          <input className="w-full mb-4 p-2 border rounded" type="email" placeholder="Your Email" required />
          <textarea className="w-full mb-4 p-2 border rounded" placeholder="Tell us about your project" rows={4} required />
          <button className="w-full bg-indigo-600 text-white py-2 rounded font-semibold hover:bg-indigo-700" type="submit">Book Call</button>
        </form>
      </div>
    </>
  );
} 