import React from "react";
import { Disclosure } from "@headlessui/react";
const Questions = () => {
  return (
    <div className="max-w-lg ml-24 mb-12 divide-y divide-neutral/20">
      <Disclosure defaultOpen>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-left">
              <span>When is payment taken for my order?</span>
              <span>{open ? "-" : "+"}</span>
            </Disclosure.Button>
            <Disclosure.Panel className="p-4 text-gray-600">
              Payment is taken during the checkout process when you pay for your
              order...
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure defaultClose>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-left">
              <span>Can I modify my booking after payment?</span>
              <span>{open ? "-" : "+"}</span>
            </Disclosure.Button>
            <Disclosure.Panel className="p-4 text-gray-600">
              Yes, most bookings can be modified depending on availability.
              However, changes might incur additional charges.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure defaultOpen>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-left">
              <span>How long does it take to receive a refund?</span>
              <span>{open ? "-" : "+"}</span>
            </Disclosure.Button>
            <Disclosure.Panel className="p-4 text-gray-600">
              Refunds are typically processed within 5-7 business days,
              depending on your payment method.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure defaultOpen>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-left">
              <span>What amenities are included in the room?</span>
              <span>{open ? "-" : "+"}</span>
            </Disclosure.Button>
            <Disclosure.Panel className="p-4 text-gray-600">
              Amenities vary by room type but generally include free Wi-Fi, air
              conditioning, a flat-screen TV, toiletries, and a minibar.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {/* Repeat for other accordion items */}
    </div>
  );
};

export default Questions;
