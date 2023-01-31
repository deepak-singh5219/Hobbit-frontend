import React,{useState} from 'react'
import CompanyLogo from '../../images/CompanyLogo.svg'
import toast from 'react-hot-toast'
const Login = () => {	
  const [loginform,setLoginform] = useState({
         email:'',
		 password:''
  })
  const [isRemember,setisRemember] = useState(true);

  const handleChange = (e) => {
	setLoginform(
		{
			...loginform,
			[e.target.name]:e.target.value,
		}
	)
  }

  const isdisabled = loginform.email && loginform.password;

  const handleFormSubmit = (e) => {
	e.preventDefault();
	console.log(isRemember);
	console.log(loginform);

  }
  return (
    <div className="flex flex-col max-w-md w-[538px] mx-4 p-6 rounded-[20px] sm:p-10 bg-white">
	<div className="mb-8 flex flex-col items-center justify-center text-center">
		<img src={CompanyLogo} alt="" />
		<p className="text-sm pt-2 text-[#808080]">Enter your email address and password</p>
	</div>
	<form onSubmit={handleFormSubmit} className="w-full space-y-12 ng-untouched ng-pristine ng-valid">
		<div className="space-y-4">
			<div>
				<input type="email" name="email" onChange={handleChange} id="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md border-gray-200" />
			</div>
			<div>
				<input type="password" name="password" onChange={handleChange} id="password" placeholder="Password" className="w-full px-3 py-2 border rounded-md border-gray-200" />
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
			<p className="px-6 mt-32 text-sm font-bold text-black text-center">Don't have an account?
				<button rel="noopener noreferrer" href="#" className="hover:underline text-[#11ABDB] pl-2 underline"> Sign up</button>.
			</p>
		</div>
	</form>
</div>

  )
}

export default Login