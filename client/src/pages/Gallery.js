import React from 'react';
import Icon1 from "../assets/gallery1.jpg";
import Icon2 from "../assets/gallery2.jpg";
import Icon3 from "../assets/gallery3.jpg";
import Icon4 from "../assets/gallery4.jpg";
import Icon5 from "../assets/gallery5.jpg";
import Icon6 from "../assets/gallery6.jpg";

export default function Music() {

  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "your_api_goes_here",
      currency: "INR",
      amount: amount * 5000,
      name: "MyLook",
      description: "Thanks for purchasing",

      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert("Payment Successfully");
      },
      prefill: {
        name: "MyLook",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div>
      <div className="grid place-items-center py-5">
        <h1 className="text-5xl font-bold text-white">Fashion Gallery</h1>
        <div className="bg-blue-500 h-1 w-36 my-2"></div>
      </div>

      <div className="flex flex-wrap justify-around w-full px-16">
        
        <div className="m-8">
          <div className="rounded-xl bg-gray-200">
            <img src={Icon1} height="300" width="300" alt="TicTbeachacToe" className="rounded-t-xl" />
            <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
              <button
                className="text-white py-2 px-8 rounded-md text-xl md:text-xl bg-blue-500"
                onClick={() => displayRazorpay(5)}
              >
                Buy this
              </button>
            </div>
          </div>
        </div>

        <div className="m-8">
          <div className="rounded-xl bg-gray-200">
            <img src={Icon2} height="300" width="300" alt="nft" className="rounded-t-xl" />
            <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
              <button
                className="text-white py-2 px-8 rounded-md text-xl md:text-xl bg-blue-500"
                onClick={() => displayRazorpay(5)}
              >
                Buy this
              </button>
            </div>
          </div>
        </div>

        <div className="m-8">
          <div className="rounded-xl bg-gray-200">
            <img src={Icon3} height="300" width="300" alt="nft" className="rounded-t-xl" />
            <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
              <button
                className="text-white py-2 px-8 rounded-md text-xl md:text-xl bg-blue-500"
                onClick={() => displayRazorpay(5)}
              >
                Buy this
              </button>
            </div>
          </div>
        </div>

        <div className="m-8">
          <div className="rounded-xl bg-gray-200">
            <img src={Icon4} height="300" width="300" alt="nft" className="rounded-t-xl" />
            <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
              <button
                className="text-white py-2 px-8 rounded-md text-xl md:text-xl bg-blue-500"
                onClick={() => displayRazorpay(5)}
              >
                Buy this
              </button>
            </div>
          </div>
        </div>

        <div className="m-8">
          <div className="rounded-xl bg-gray-200">
            <img src={Icon5} height="300" width="300" alt="nft" className="rounded-t-xl" />
            <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
              <button
                className="text-white py-2 px-8 rounded-md text-xl md:text-xl bg-blue-500"
                onClick={() => displayRazorpay(5)}
              >
                Buy this
              </button>
            </div>
          </div>
        </div>

        <div className="m-8">
          <div className="rounded-xl bg-gray-200">
            <img src={Icon6} height="300" width="300" alt="nft" className="rounded-t-xl" />
            <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
              <button
                className="text-white py-2 px-8 rounded-md text-xl md:text-xl bg-blue-500"
                onClick={() => displayRazorpay(5)}
              >
                Buy this
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
