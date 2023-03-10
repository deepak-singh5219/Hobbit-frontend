import React,{useState} from 'react'
import CompanyLogo from '../../images/CompanyLogo.svg'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
const Login = () => {	
  const [loginform,setLoginform] = useState({
         email:'',
		 password:''
  })
  const [isRemember,setisRemember] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
	setLoginform(
		{
			...loginform,
			[e.target.name]:e.target.value,
		}
	)
  }

  const isdisabled = loginform.email && loginform.password;

  const handleFormSubmit = async (e) => {
	e.preventDefault();
	try {
		const res = await axios.post('api',JSON.stringify(loginform),
		{
			headers: {
				'Content-Type': 'application/json'
			  }
		})
		toast.success("Login Successful!");
		// navigate(`${_id}/success`);
		console.log("Response:",res);
		
	  } catch (err) {
	
		console.log("Error",err);
	  }

  }
  return (
    <div className="flex flex-col max-w-md w-[400px] mx-4 p-6 rounded-[20px] sm:p-10 bg-white">
	<div className="mb-8 flex flex-col items-center justify-center text-center">
		<img src={CompanyLogo} alt="" />
		<p className="text-xs pt-2 text-[#808080]">Enter your email address and password</p>
	</div>
	<form onSubmit={handleFormSubmit} className="w-full space-y-6 ng-untouched ng-pristine ng-valid">
		<div className="space-y-4">
			<div>
				<input type="email" name="email" onChange={handleChange} id="email" placeholder="Email" className="w-full text-xs px-3 py-2 border rounded-md border-gray-200" />
			</div>
			<div>
				<input type="password" name="password" onChange={handleChange} id="password" placeholder="Password" className="w-full text-xs px-3 py-2 border rounded-md border-gray-200" />
			</div>
      <div className="flex items-center">
        <input type="checkbox" name="isRemember" defaultChecked={isRemember} onChange={()=>setisRemember(!isRemember)} className="border rounded-md border-gray-200"/> 
        <p className="ml-2 text-[#667280] text-sm">Remember me</p>
      </div>
			<div>
				<button type="submit" disabled={!isdisabled} className={`w-full hover:cursor-pointer px-8 py-3 font-semibold rounded-md ${!isdisabled?"bg-[#D9D9D9]":"bg-gradient-to-b from-cyan-500 to-blue-500"} text-white`}>Login</button>
			</div>
		</div>
		<div>
			<p className="px-6 text-xs mt-32 text-sm font-bold text-black text-center">Don't have an account?
				<button onClick={() => navigate('/signup')} rel="noopener noreferrer" href="#" className="hover:underline text-[#11ABDB] pl-2 underline"> Sign up</button>
			</p>
		</div>
	</form>
</div>

  )
}

export default Login