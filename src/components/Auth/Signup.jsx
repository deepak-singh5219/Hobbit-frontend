import React,{useState} from 'react'
import CompanyLogo from '../../images/CompanyLogo.svg'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import countries from '../../Data/countries'
import axios from 'axios'

const Signup = () => {	
  const [signupform,setSignupform] = useState({
    name:'',
    phone:'',
    country:'',
    email:'',
		password:''
  })
  const navigate = useNavigate();
  

  const handleChange = (e) => {
	setSignupform(
		{
			...signupform,
			[e.target.name]:e.target.value,
		}
	)
  }

  const isdisabled = signupform.name && signupform.phone && signupform.country && signupform.email && signupform.password;

  const handleFormSubmit = async (e) => {
	e.preventDefault();
	
	try {
    const res = await axios.post('api',JSON.stringify(signupform),
    {
        headers: {
            'Content-Type': 'application/json'
          }
    })
    toast.success("Signup Successful!");
    navigate('/success');
    console.log("Response:",res);
    
  } catch (err) {

    console.log("Error",err);
  }
	

  }
  return (
    <div className="flex flex-col max-w-md w-[400px] mx-4 p-4 rounded-[20px] sm:p-10 bg-white">
	<div className="mb-2 flex flex-col items-center justify-center text-center">
		<img src={CompanyLogo} alt="" />
		<p className="text-xs pt-2 text-[#808080]">Enter your email address and password</p>
	</div>
	<form onSubmit={handleFormSubmit} className="w-full space-y-8 ng-untouched ng-pristine ng-valid">
		<div className="space-y-4">
			<div>
				<input type="text" name="name" onChange={handleChange} placeholder="Full Name" className="w-full text-xs px-3 py-2 border rounded-md border-gray-200" />
			</div>
			<div>
				<input type="tel" name="phone" onChange={handleChange} pattern="[0-9]{10}" placeholder="Phone Number" className="w-full text-xs px-3 py-2 border rounded-md border-gray-200" />
			</div>
			<div>
				<select required name="country" onChange={handleChange} className="w-full text-xs px-3 py-2 border rounded-md border-gray-200" >
           <option value="" disabled hidden selected>Country</option>
          {
               countries.map(((country,_id) => (<option key={_id} value={country}>{country}</option>)))
          }
        </select>
			</div>
			<div>
				<input type="email" name="email" onChange={handleChange} id="email" placeholder="Email" className="w-full text-xs px-3 py-2 border rounded-md border-gray-200" />
			</div>
			<div>
				<input type="password" name="password" onChange={handleChange} id="password" placeholder="Password" className="w-full text-xs px-3 py-2 border rounded-md border-gray-200" />
			</div>
      
			<div>
				<button type="submit" disabled={!isdisabled} className={`w-full hover:cursor-pointer px-8 py-3 font-semibold rounded-md ${!isdisabled?"bg-[#D9D9D9]":"bg-gradient-to-b from-cyan-500 to-blue-500"} text-white`}>Signup</button>
			</div>
    <p className="px-8 text-center text-xs">By registering you agree to the Forcasting. <span className='text-[#000000] font-semibold underline'>Terms of Use</span> and <span className='text-[#000000] font-semibold underline'>Privacy Policy.</span></p>
		</div>

		<div>
			<p className="px-6 text-xs font-bold text-black text-center">Already have an account?
				<button onClick={()=> navigate('/')} rel="noopener noreferrer" href="#" className="hover:underline text-[#11ABDB] pl-2 underline">Login</button>
			</p>
		</div>
	</form>
</div>

  )
}

export default Signup;