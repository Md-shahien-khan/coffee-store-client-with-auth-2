import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


// step 48
const SignUp = () => {

    // firebase step 12
    const {createUser} = useContext(AuthContext);


    const handleSignUp = e =>{
        e.preventDefault();
        console.log('Form Sign Up');
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        
        
        // firebase step 13
        createUser(email, password)
        .then(result =>{
            console.log(result.user);
            // step 19
            const createdAt = result?.user?.metadata?.creationTime;
            // firebase step 17 
            const newUser = {name, email, createdAt}
            // firebase step 16 save new users to database
            fetch('http://localhost:5000/users', {
                method : 'POST',
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => {
                // console.log('user created to db', data)
                if(data.insertId){
                    alert('user created in database');
                }
            })
        })
        .catch(error =>{
            console.log('Error : ', error);
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Sign Up Now</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSignUp} className="card-body">
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">User name</span>
                        </label>
                        <input type="text" placeholder="username" name="name" className="input input-bordered" required />
                    </div>
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
                    <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;