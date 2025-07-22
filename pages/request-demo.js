import Head from "next/head";

export default function RequestDemo() {
  return (
    <>
      <Head>
        <title>Request a Demo | Helping Cloud</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-16">
        <h1 className="text-3xl font-bold mb-4">Request a Demo</h1>
        <p className="mb-8 text-gray-700 max-w-xl text-center">Want to see our solutions in action? Request a demo and our team will walk you through our platforms and answer your questions.</p>
        <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <input className="w-full mb-4 p-2 border rounded" type="text" placeholder="Your Name" required />
          <input className="w-full mb-4 p-2 border rounded" type="email" placeholder="Your Email" required />
          <textarea className="w-full mb-4 p-2 border rounded" placeholder="What would you like to see in the demo?" rows={4} required />
          <button className="w-full bg-indigo-600 text-white py-2 rounded font-semibold hover:bg-indigo-700" type="submit">Request Demo</button>
        </form>
      </div>
    </>
  );
} 