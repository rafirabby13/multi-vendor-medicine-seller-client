/* eslint-disable react/no-unescaped-entities */
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { FaChevronDown } from "react-icons/fa";
import Header from "../../components/molecules/Header";

const Faq = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
     
      <Header title={'Frequently Asked Questions'} description={'Find answers to common questions about using MediMart'}></Header>

      {/* <div className="flex mb-10 max-w-lg mx-auto shadow-md rounded-lg overflow-hidden">
        <input 
          type="text" 
          placeholder="Search for questions..." 
          className="flex-grow py-3 px-4 border border-gray-200 focus:outline-none"
        />
        <button type="submit" className="bg-btns text-white px-6 py-3 font-medium hover:bg-blue-800 transition duration-200">
          Search
        </button>
      </div> */}

      <Accordion 
        allowZeroExpanded 
        className="mb-12 space-y-4"
      >
        <AccordionItem className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-200">
          <AccordionItemHeading>
            <AccordionItemButton className="flex justify-between items-center p-5 bg-gray-50 w-full text-left">
              <span className="text-lg font-medium text-gray-800">How do I place an order?</span>
              <FaChevronDown className="text-blue-700 transition-transform duration-200" />
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="p-5 bg-white">
            <p className="text-gray-700 mb-4">
              You can browse products from multiple vendors, add items to your
              cart, and proceed to checkout. Once payment is confirmed, your
              order will be processed.
            </p>
            <a href="/how-to-order" className="text-blue-600 hover:text-blue-800 hover:underline inline-block font-medium">View our ordering guide →</a>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-200">
          <AccordionItemHeading>
            <AccordionItemButton className="flex justify-between items-center p-5 bg-gray-50 w-full text-left">
              <span className="text-lg font-medium text-gray-800">Can I buy from multiple sellers in one order?</span>
              <FaChevronDown className="text-blue-700 transition-transform duration-200" />
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="p-5 bg-white">
            <p className="text-gray-700">
              Yes! You can add products from different vendors to your cart and
              check out in a single transaction. Our system will organize delivery
              from each vendor optimally.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-200">
          <AccordionItemHeading>
            <AccordionItemButton className="flex justify-between items-center p-5 bg-gray-50 w-full text-left">
              <span className="text-lg font-medium text-gray-800">How do I track my order?</span>
              <FaChevronDown className="text-blue-700 transition-transform duration-200" />
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="p-5 bg-white">
            <p className="text-gray-700 mb-4">
              Go to Dashboard → My Orders to check the status of your order. You
              will also receive email updates at each stage of the fulfillment process.
            </p>
            <div className="space-y-3 mt-4">
              <div className="flex items-center">
                <div className="bg-blue-700 text-white h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  1
                </div>
                <div className="text-gray-700">Log into your account</div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-700 text-white h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  2
                </div>
                <div className="text-gray-700">Navigate to "My Orders"</div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-700 text-white h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  3
                </div>
                <div className="text-gray-700">Click on the order you want to track</div>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-200">
          <AccordionItemHeading>
            <AccordionItemButton className="flex justify-between items-center p-5 bg-gray-50 w-full text-left">
              <span className="text-lg font-medium text-gray-800">What is the return and refund policy?</span>
              <FaChevronDown className="text-blue-700 transition-transform duration-200" />
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="p-5 bg-white">
            <p className="text-gray-700 mb-4">
              Each vendor has their own return policy. Check the product page
              for return eligibility. If applicable, request a return from My
              Orders within 14 days of delivery.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-gray-700">
              <strong className="font-medium">Note:</strong> Prescription medications typically cannot be returned due to
              safety regulations. Please contact customer support for specific inquiries.
            </div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-200">
          <AccordionItemHeading>
            <AccordionItemButton className="flex justify-between items-center p-5 bg-gray-50 w-full text-left">
              <span className="text-lg font-medium text-gray-800">How can I contact customer support?</span>
              <FaChevronDown className="text-blue-700 transition-transform duration-200" />
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="p-5 bg-white">
            <p className="text-gray-700 mb-4">
              You can reach us via the Contact Us page or email us at
              support@medimart.com. Our support team is available from 8am to 8pm, seven days a week.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-medium mb-2">Email</h4>
                <p className="text-gray-600">support@medimart.com</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-medium mb-2">Phone</h4>
                <p className="text-gray-600">1-800-MEDIMART</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-medium mb-2">Live Chat</h4>
                <p className="text-gray-600">Available on website</p>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-200">
          <AccordionItemHeading>
            <AccordionItemButton className="flex justify-between items-center p-5 bg-gray-50 w-full text-left">
              <span className="text-lg font-medium text-gray-800">Do I need a prescription to order medications?</span>
              <FaChevronDown className="text-blue-700 transition-transform duration-200" />
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="p-5 bg-white">
            <p className="text-gray-700">
              Yes, prescription medications require a valid prescription from a licensed healthcare provider. 
              You can upload your prescription during checkout or have your doctor send it directly to us.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-200">
          <AccordionItemHeading>
            <AccordionItemButton className="flex justify-between items-center p-5 bg-gray-50 w-full text-left">
              <span className="text-lg font-medium text-gray-800">How is my personal health information protected?</span>
              <FaChevronDown className="text-blue-700 transition-transform duration-200" />
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="p-5 bg-white">
            <p className="text-gray-700 mb-4">
              MediMart complies with all healthcare privacy regulations. Your personal health information 
              is encrypted and securely stored. We never share your medical information with third parties 
              without your explicit consent.
            </p>
            <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800 hover:underline inline-block font-medium">View our privacy policy →</a>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-200">
          <AccordionItemHeading>
            <AccordionItemButton className="flex justify-between items-center p-5 bg-gray-50 w-full text-left">
              <span className="text-lg font-medium text-gray-800">How long does delivery take?</span>
              <FaChevronDown className="text-blue-700 transition-transform duration-200" />
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="p-5 bg-white">
            <p className="text-gray-700">
              Standard delivery typically takes 2-5 business days, depending on your location. 
              Express delivery (1-2 business days) is available for urgent medications. You'll see 
              estimated delivery times at checkout.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>

      <div className="text-center bg-blue-50 p-8 rounded-xl">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Still have questions?</h3>
        <p className="text-gray-600 mb-6">Our customer support team is ready to help you</p>
        <a href="/contact" className="bg-btns text-white py-3 px-8 rounded-md inline-block font-medium hover:bg-blue-800 transition duration-200">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Faq;