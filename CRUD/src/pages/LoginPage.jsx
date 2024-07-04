import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Verifica que este import sea correcto

function LoginPage() {
   const { register, handleSubmit, formState: { errors } } = useForm();
   const { signin, errors: signinErrors } = useAuth();

   const onSubmit = handleSubmit((data) => {
        signin(data);
    });

    return (
        <div className='relative flex flex-col md:flex-row justify-center items-center min-h-screen bg-black p-4'>
            <div className="absolute inset-0 z-0">
                <img
                    src="https://th.bing.com/th/id/OIP.GEJk5XRwuEHPWUxXQljbnwHaEo?rs=1&pid=ImgDetMain"
                    className='absolute inset-0 w-full h-full object-cover blur-md opacity-70'
                />
            </div>
            {/* Contenido principal */}
            <div className='relative z-10 max-w-lg mb-8 md:mb-0 md:mr-8'>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-6 leading-tight'>
                    <span className="block">INSERT YOUR TASK</span>
                    <span className="block">COMPLET YOUR TASK</span>
                    <span className="block">AND ENJOY</span>
                </h1>
                <img
                    src="https://th.bing.com/th/id/R.7b60fb2add5148fcabb2f6d2a080ac99?rik=u74SCI9C2jfNBw&riu=http%3a%2f%2fwww.ekaenlinea.com%2fwp-content%2fuploads%2f2016%2f09%2fseguridad-informatica-1.jpg&ehk=uM36vSdRqB9kqj6M1E2fAXJDEHxe3y85WyKFdOi02Hw%3d&risl=&pid=ImgRaw&r=0"
                    className='h-64 w-64 md:h-96 md:w-96 object-cover rounded-full shadow-lg'
                    alt='Imagen principal'
                />
            </div>
            {/* Contenedor del formulario */}
            <div className='relative z-1 max-w-md w-full p-10 rounded-md shadow-lg'>
                <form onSubmit={onSubmit} className='flex flex-col gap-4'>
                    <center><b><span className='text-white'>LOG IN</span></b></center>
                    {
                     signinErrors.map((error, i) => (
                        <div className='bg-red-500 p-2 text-white' key={i}>
                            {error}
                     </div>
                    ))
                    }
                    <input
                        type="email"
                        {...register("email", { required: true })}
                        className='w-full bg-gray-200 text-black px-4 py-2 rounded-md'
                        placeholder="Email"
                    />
                    {errors.email && <p className='text-red-500'>Email is required</p>}
                    
                    <input
                        type="password"
                        {...register("password", { required: true })}
                        className='w-full bg-gray-200 text-black px-4 py-2 rounded-md'
                        placeholder='Password'
                    />
                    {errors.password && <p className='text-red-500'>Password is required</p>}
                    
                    <button
                        type="submit"
                        className='bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 transition-colors'
                    >
                        Log in
                    </button>
                </form>
                <p className='flex gap-x-2 justify-between my-2 text-white'>
                    Dont´t have an account <Link to= "/register" className='text-white'>Sign Up</Link>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;
