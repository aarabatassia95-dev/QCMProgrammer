import React, { useState } from "react";

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
    <div className="container d-flex justify-content-center mt-5">      <div className="card shadow p-4">
      <div className="card shadow p-4" style={{ maxWidth: "450px", width: "100%" }}>
        <h3 className="text-center mb-3">Registration Form</h3>

        <form onSubmit={next}>

          {/* First & Last Name */}
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input className="form-control" type="text" placeholder="Enter first name" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
            {errors.firstname && <p className="text-danger">{errors.firstname}</p>}
          </div>

          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input className="form-control" type="text" placeholder="Enter last name" value={lastname} onChange={(e) => setLastname(e.target.value)}
            />
            {errors.lastname && <p className="text-danger">{errors.lastname}</p>}
          </div>

          {/* Gender */}
          <div className="mb-3">
            <label className="form-label">Gender</label>
            <div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)}/>
                <label className="form-check-label">Male</label>
              </div>

              <div className="form-check form-check-inline">
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
            {errors.Gender && <p className="text-danger">{errors.Gender}</p>}
          </div>

          {/* Age */}
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              className="form-control"
              type="number"
              placeholder="Enter age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            {errors.age && <p className="text-danger">{errors.age}</p>}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-danger">{errors.email}</p>}
          </div>

          {/* Level */}
          <div className="mb-4">
  <label className="form-label fw-semibold">
    Your programming level
  </label>

  <select
    className="form-select form-select-lg"
    value={level}
    onChange={(e) => setLevel(e.target.value)}
  >
    <option value="">Select your level</option>
    <option value="beginner">Beginner</option>
    <option value="intermediate">Intermediate</option>
    <option value="advanced">Advanced</option>
    <option value="expert">Expert / Professional</option>
    <option value="no-experience">No programming experience</option>
  </select>

  {errors.level && (
    <p className="text-danger mt-1">{errors.level}</p>
  )}
</div>


           <button className="btn btn-primary w-100" type="submit">
            Submit
          </button>
          
        </form>
        </div>
      </div>
    </div>
  );
}

export default PageForm;
