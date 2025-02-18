import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
const Faq = () => {
  return (
    <div className="py-20">
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>How do I place an order?</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              You can browse products from multiple vendors, add items to your
              cart, and proceed to checkout. Once payment is confirmed, your
              order will be processed.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Can I buy from multiple sellers in one order?{" "}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes! You can add products from different vendors to your cart and
              check out in a single transaction.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>How do I track my order?</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Go to Dashboard → My Orders to check the status of your order. You
              will also receive email updates.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What is the return and refund policy?{" "}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Each vendor has their own return policy. Check the product page
              for return eligibility. If applicable, request a return from My
              Orders.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How can I contact customer support?{" "}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              You can reach us via the Contact Us page or email us at
              support@medimart.com.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;
