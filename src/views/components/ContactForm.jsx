// ContactForm.js

import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import RevealOnScroll from "./ScrollAnimation";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, surname, email, message, phone } = formData;

    // Construct the mailto URL with form data
    const mailtoLink = `mailto:jagdamba_com@yahoo.in?subject=Form Submission&body=Name: ${name}%0D%0ASurname: ${surname}%0D%0AEmail: ${email}%0D%0AMessage: ${message}%0D%0APhone: ${phone}`;

    // Open the user's default email client with the prefilled details
    window.location.href = mailtoLink;
    setFormData({
      name: "",
      surname: "",
      email: "",
      message: "",
      phone: "",
    });
  };

  return (
      <div className="mb-8">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col space-y-4"
                >
                  <div className="flex flex-col md:flex-row lg:flex-row md:space-x-4">
                    <div className="flex-1">
                      <RevealOnScroll>
                        <TextField
                          label="Name"
                          variant="outlined"
                          fullWidth
                          margin="normal"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </RevealOnScroll>
                    </div>
                    <div className="flex-1">
                      <RevealOnScroll>
                        <TextField
                          label="Surname"
                          variant="outlined"
                          fullWidth
                          margin="normal"
                          name="surname"
                          value={formData.surname}
                          onChange={handleChange}
                          required
                        />
                      </RevealOnScroll>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row lg:flex-row md:space-x-4">
                    <div className="flex-1">
                      <RevealOnScroll>
                        <TextField
                          label="Email"
                          variant="outlined"
                          fullWidth
                          margin="normal"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </RevealOnScroll>
                    </div>
                    <div className="flex-1">
                      <RevealOnScroll>
                        <TextField
                          label="Phone Number"
                          variant="outlined"
                          fullWidth
                          margin="normal"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </RevealOnScroll>
                    </div>
                  </div>
                  <RevealOnScroll>
                    <TextField
                      label="Message"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      multiline
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </RevealOnScroll>

                  <div className="text-end">
                    <button
                      type="submit"
                      className="text-white border rounded-md border-solid bg-red_color p-4 hover:bg-red-600 transition-all duration-300"
                    >
                      Send Email
                    </button>
                  </div>
                </form>
    </div>
  );
};

export default ContactForm;
