import React, { useState } from "react";
import "./index.css"
function PageForm() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [Gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [level, setLevel] = useState('');

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!firstname.trim()) newErrors.firstname = "Please enter your first name.";
    if (!lastname.trim()) newErrors.lastname = "Please enter your last name.";
    if (!Gender.trim()) newErrors.Gender = "Please select your gender.";
    if (!age.trim()) newErrors.age = "Please enter your age.";
    if (!email.trim()) newErrors.email = "Please enter your email.";
    if (!level.trim()) newErrors.level = "Please select your level.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const next = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("✅ Form submitted successfully!");
    }
  };

  return (
 <div className="container d-flex justify-content-center align-items-center form-container" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
  <div className="card shadow-lg p-5" style={{ maxWidth: "700px", width: "100%", borderRadius: "16px" }}>
    <h1 className="text-center mb-4 fw-bold">Hi there !</h1>
    <h6 className="text-center text-muted mb-2" style={{ fontSize: "18px" }}>Begin your free programming course today </h6>
    <p className="text-center mb-4 fw-bold">No credit card required</p>

    <form onSubmit={next}>

    
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="firstName" className="form-label">First name</label>
          <input id="firstName" type="text" className="form-control form-control-lg" value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder="Enter your first name"/>
          {errors.firstname && <div className="text-danger small mt-1">{errors.firstname}</div>}
        </div>

        <div className="col-md-6 mb-3">
          <label htmlFor="lastName" className="form-label">Last name</label>
          <input id="lastName" type="text" className="form-control form-control-lg" value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder="Enter your last name"/>
          {errors.lastname && <div className="text-danger small mt-1">{errors.lastname}</div>}
        </div>
      </div>

    
      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">Gender</label>
          <div className="d-flex gap-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="Male"
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="form-check-label">Male</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="Female"
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="form-check-label">Female</label>
            </div>
          </div>
          {errors.Gender && <div className="text-danger small mt-1">{errors.Gender}</div>}
        </div>

        <div className="col-md-6 mb-3">
          <label htmlFor="age" className="form-label">Age</label>
          <input
            id="age"
            type="number"
            className="form-control form-control-lg"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Your age"
          />
          {errors.age && <div className="text-danger small mt-1">{errors.age}</div>}
        </div>
      </div>

      {/* EMAIL + LEVEL */}
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            id="email"
            type="email"
            className="form-control form-control-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          {errors.email && <div className="text-danger small mt-1">{errors.email}</div>}
        </div>

        <div className="col-md-6 mb-4">
          <label className="form-label">Programming level</label>
          <select className="form-select form-select-lg" value={level} onChange={(e) => setLevel(e.target.value)}>
            <option value="">Select your level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="expert">Expert / Professional</option>
            <option value="no-experience">No programming experience</option>
          </select>
          {errors.level && <div className="text-danger small mt-1">{errors.level}</div>}
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-lg w-100">
        Sign up
      </button>

    </form>
  </div>
</div>


  );
}

export default PageForm;
