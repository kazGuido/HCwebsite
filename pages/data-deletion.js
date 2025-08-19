import Head from "next/head";

export default function DataDeletion() {
  return (
    <>
      <Head>
        <title>Data Deletion Instructions - HelpingCloud</title>
        <meta name="description" content="Learn how to request deletion of your personal data from HelpingCloud. Clear instructions for data removal requests." />
        <meta name="robots" content="noindex" />
      </Head>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Data Deletion Instructions
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                <p className="text-blue-800">
                  <strong>Your Right to Data Deletion:</strong> You have the right to request the deletion of your personal data from our systems. This page provides clear instructions on how to exercise this right.
                </p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Data Can Be Deleted</h2>
                <p className="text-gray-700 mb-4">
                  You can request deletion of the following types of personal data:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Account information (name, email, phone number)</li>
                  <li>Contact form submissions</li>
                  <li>Demo request information</li>
                  <li>Marketing communication preferences</li>
                  <li>Website usage data linked to your identity</li>
                  <li>Any other personal information you've provided</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Request Data Deletion</h2>
                
                <div className="bg-gray-100 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-4">Method 1: Email Request (Recommended)</h3>
                  <p className="text-gray-700 mb-4">
                    Send an email to our privacy team with the following information:
                  </p>
                  <div className="bg-white p-4 rounded border">
                    <p className="text-gray-700 mb-2">
                      <strong>To:</strong> privacy@helpingcloud.com
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Subject:</strong> Data Deletion Request
                    </p>
                    <p className="text-gray-700 mb-4">
                      <strong>Required Information:</strong>
                    </p>
                    <ul className="list-disc pl-6 text-gray-700">
                      <li>Your full name</li>
                      <li>Email address associated with your account</li>
                      <li>Clear statement requesting data deletion</li>
                      <li>Reason for deletion (optional but helpful)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-4">Method 2: Contact Form</h3>
                  <p className="text-gray-700 mb-4">
                    Use our contact form and select "Data Deletion Request" as the subject:
                  </p>
                  <a 
                    href="/contact" 
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Go to Contact Form
                  </a>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-gray-800 mb-4">Method 3: Phone Request</h3>
                  <p className="text-gray-700 mb-4">
                    Call our privacy team directly:
                  </p>
                  <div className="bg-white p-4 rounded border">
                    <p className="text-gray-700 mb-2">
                      <strong>Phone:</strong> [Your Phone Number]
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM EST
                    </p>
                    <p className="text-gray-700">
                      Please have your email address ready for verification.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Happens After Your Request</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-4 mt-1">1</div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Confirmation Received</h4>
                      <p className="text-gray-700">You'll receive an email confirmation within 24 hours acknowledging your request.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-4 mt-1">2</div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Identity Verification</h4>
                      <p className="text-gray-700">We may request additional verification to ensure the request is legitimate and protect your privacy.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-4 mt-1">3</div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Data Processing</h4>
                      <p className="text-gray-700">Your data will be permanently deleted from our systems within 30 days of verification.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-4 mt-1">4</div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Completion Notification</h4>
                      <p className="text-gray-700">You'll receive a final confirmation email once your data has been successfully deleted.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Important Information</h2>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <h4 className="font-medium text-yellow-800 mb-2">Data Retention Requirements</h4>
                  <p className="text-yellow-700">
                    Some data may be retained for legal or regulatory purposes, such as:
                  </p>
                  <ul className="list-disc pl-6 text-yellow-700 mt-2">
                    <li>Financial records for tax purposes</li>
                    <li>Legal compliance requirements</li>
                    <li>Fraud prevention and security</li>
                  </ul>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                  <h4 className="font-medium text-red-800 mb-2">Permanent Deletion</h4>
                  <p className="text-red-700">
                    Once your data is deleted, it cannot be recovered. Please ensure you have backed up any important information before requesting deletion.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h4 className="font-medium text-blue-800 mb-2">Third-Party Services</h4>
                  <p className="text-blue-700">
                    If you've used our services through third-party platforms (like social media), you may need to request deletion from those platforms separately.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <h4 className="font-medium text-gray-900 mb-2">How long does the deletion process take?</h4>
                    <p className="text-gray-700">We process deletion requests within 30 days of receiving and verifying your request.</p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Can I cancel my deletion request?</h4>
                    <p className="text-gray-700">Yes, you can cancel your request within 7 days of submission by contacting us with the same email address.</p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Will I lose access to my account immediately?</h4>
                    <p className="text-gray-700">Account access will be suspended once the deletion process begins, but you'll be notified before this happens.</p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-4">
                    <h4 className="font-medium text-gray-900 mb-2">What if I have an active subscription?</h4>
                    <p className="text-gray-700">If you have an active subscription, we'll process the deletion after your subscription period ends, unless you specifically request immediate deletion.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Can I request partial deletion of my data?</h4>
                    <p className="text-gray-700">Yes, you can request deletion of specific data types. Please specify which data you want deleted in your request.</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    For any questions about data deletion or to submit your request:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-700 mb-2">
                        <strong>Email:</strong> privacy@helpingcloud.com
                      </p>
                      <p className="text-gray-700 mb-2">
                        <strong>Phone:</strong> [Your Phone Number]
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-700 mb-2">
                        <strong>Address:</strong> [Your Business Address]
                      </p>
                      <p className="text-gray-700">
                        <strong>Response Time:</strong> Within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 text-center">
                  This data deletion policy is effective as of {new Date().toLocaleDateString()} and is part of our commitment to your privacy rights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
