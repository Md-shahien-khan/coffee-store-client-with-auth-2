import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

// step 47
const SignIn = () => {

    const {signInUser} = useContext(AuthContext);

    const handleSignIn = e =>{
        e.preventDefault();
        // console.log('Form Sign in');
        // const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);

        signInUser(email, password)
        .then(result =>{
            console.log(result);
            // update last login time step 48
            const lastSignInTime = result?.user?.metadata?.lastSignInTime;
            const loginInfo = {email, lastSignInTime};

            // tep 51
            fetch(`http://localhost:5000/users`,{
                method : 'PATCH',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(loginInfo)
            })
            .then(res => res.json())
            .then(data => {
                console.log('sign in info updated in db', data)
            })

        })
        .catch(error =>{
            console.log('error : ', error);
        })
    }
    
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Sign In</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSignIn} className="card-body">
                {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">User name</span>
                        </label>
                        <input type="text" placeholder="username" name="name" className="input input-bordered" required />
                    </div> */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign In</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;