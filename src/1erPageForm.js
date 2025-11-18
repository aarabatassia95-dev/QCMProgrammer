import React,{useState} from "react";
function PageForm(){
    const [firstname,setfirstname]=useState('')
    const [lastname,setlastname]=useState('')
    const [Gender,setGender]=useState('')
    const [age,setage]=useState('')
    const [email,setemail]=useState('')
    const [level,setlevel]=useState('')
    const [condition,setcondition]=useState(false)
    
    const [errors, setErrors] = useState([]);

  const validateForm = () => {
    let newErrors = [];

    if (!firstname.trim()) newErrors.firstname = "Please enter your first name.";
    if (!lastname.trim()) newErrors.lastname = "Please enter your last name.";
    if (!Gender.trim()) newErrors.Gender = "Please select your gender.";
    if (!age.trim()) newErrors.age = "Please enter your age.";
    if (!email.trim()) newErrors.email = "Please enter your email.";
    if (!level.trim()) newErrors.level = "Please select your level.";
    if (!condition) newErrors.condition = "You must agree to the rules.";

    setErrors(newErrors);

  };

  const next = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("✅ Form submitted successfully!");
    }
  };

    return(
        <div>
            <form onSubmit={next}>
                   {/* FIRST NAME */}
        <div style={{ marginBottom: "15px" }}>
          
                <label>First Name</label>
                <input type="text" value={firstname} placeholder="Enter your first name" onChange={(e)=>setfirstname(e.target.value)}/><br/><br/>
                {errors.firstname && (<p style={{ color: "red", margin: "0" }}>{errors.firstname}</p>)}
                 <label>Last Name</label>
                <input type="text" value={lastname} placeholder="Enter your last name" onChange={(e)=>setlastname(e.target.value)}/><br/><br/>
                {errors.lastname && (<p style={{ color: "red", margin: "0" }}>{errors.lastname}</p>)}
        </div>
                <label>What is your gender ?</label>
                <input type="radio" name="g" value='Male'onChange={(e)=>setGender(e.target.value)}/>Male
                <input type="radio" name="g" value='Female'onChange={(e)=>setGender(e.target.value)}/>Female <br/><br/>
                {errors.Gender && (<p style={{ color: "red", margin: "0" }}>{errors.Gender}</p>)}
                <label>your age ?</label>
                <input type="number" placeholder="your age" value={age} onChange={(e)=>setage(e.target.value)}/>
                 <label>Email</label>
                <input type="email" placeholder=" your email " value={email} onChange={(e)=>setemail(e.target.value)}/>
                 <label>What is your level?</label>
                <select value={level} onChange={(e)=>setlevel(e.target.value)}>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                     <option value="advanced">Advanced</option>
                  </select><br/>
                    <label></label>
                    <input type="checkbox"  checked={condition} onChange={(e)=>setcondition(e.target.value)} />I agree to the rules
                   <p class="warning">Remember: Don't cheat during the quiz!</p>
                   {/* {errors && <p style={{ color: "red" }}>{errors}</p>} */}
                   <button type="submit">Submit</button>

            </form>
        </div>
    )

}export default PageForm