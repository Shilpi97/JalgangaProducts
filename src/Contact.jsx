import React, { useState } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        msg: '',
    });

    const InputEvent = (event) => {
        const {name, value} = event.target;
        setData((preVal) => {
            return {
                ... preVal,
                [name] : value,
            }
        })
    };

    const formSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_994az7l', 'template_c8abvap', e.target, 'user_QWbVQn4Mr9rurK0440SOo')
        .then((result) => {
            console.log(result.text);
            alert(`Thank you! Your contact details received.`);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };

  return (
    <>
      <div className="my-3">
        <h2 className="text-center  navbar-brand font-weight-bolder">Contact Us</h2>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label  mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label  mb-1">
                  Phone No.
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Mobile number"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label  mb-1">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div class="col-12">
                    <button class="btn btn-outline-primary" type="submit">Submit form</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
