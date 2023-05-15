import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactUs = () => {
  const form = useRef();
  const showToastMessage = () => {
    toast.success("Mail Sent!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_82d3zt5",
        "template_vfllgd9",
        form.current,
        "HPa180KbTFtP9Yvue"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          showToastMessage();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div>
        <ToastContainer />
      </div>
      <div className="flex items-center justify-center  mt-9">
        <h1
          className="text-4xl font-bold
       "
        >
          {" "}
          CONTACT US
        </h1>
      </div>
      <div className="ml-4 mr-4 w-fill mt-7 ">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col 
    "
        >
          <div className="flex flex-col">
            <label>Product Name</label>
            <input
              type="text"
              name="product_name"
              className="bg-gray-100 h-9 indent-2 "
              placeholder="Enter Product/Service Name"
              required
            />
          </div>
          <div className="flex flex-col mt-2">
            <label>담당자명</label>
            <input
              type="text"
              name="user_name"
              className="bg-gray-100 h-9 indent-2 "
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="flex flex-col mt-2">
            <label>회사명</label>
            <input
              type="text"
              name="company_name"
              className="bg-gray-100 h-9 indent-2 "
              placeholder="Enter Your Company Name"
              required
            />
          </div>
          <div className="flex flex-col mt-2">
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              className="bg-gray-100 h-9 indent-2 "
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="flex flex-col mt-2">
            <label>핸드폰</label>
            <input
              type="tel"
              name="user_number"
              // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              className="bg-gray-100 h-9 indent-2 "
              placeholder="Phone/Mobile"
              required
            />
          </div>
          <div className="flex flex-col mt-2">
            <label>예상 필요 수량</label>
            <input
              type="text"
              name="amount_number"
              className="bg-gray-100 h-9 indent-2 "
              placeholder="Enter Amount"
              required
            />
          </div>
          <div className="flex flex-col mt-2">
            <label>목표 수입 단가</label>
            <input
              type="text"
              name="price_number"
              className="bg-gray-100 h-9 indent-2 "
              placeholder="Enter Price"
              required
            />
          </div>
          <div className="flex flex-col mt-4">
            <label>
              벤치 마킹 제품이 있을 경우 제품명 또는 판매 페이지 링크를
              넣어주세요.
            </label>
            <textarea
              name="messageOne"
              placeholder="Enter Your Message"
              required
              className="bg-gray-100 h-20 indent-2 "
            />
          </div>
          <div className="flex flex-col mt-2">
            <label>내용</label>
            <textarea
              name="messageTwo"
              placeholder="Enter Your Message"
              required
              className="bg-gray-100 h-20 indent-2 "
            />
          </div>

          <input
            type="submit"
            value="SUBMIT"
            className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded w-44 ml-auto mr-auto mt-7"
          />
        </form>
      </div>
    </>
  );
};
