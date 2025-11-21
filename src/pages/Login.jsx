
function LoginPage() {
    return (
        <main className='min-h-screen flex items-center justify-center bg-gray-50 p-4'>
            <div className='w-full max-w-md bg-white rounded-[10px] shadow-xl p-8 sm:p-10'>
                <div className='flex flex-col items-center mb-8'>
                    <h1 className='text-[32px] font-bold leading-10 text-black'>
                        Connexion
                    </h1>
                    <p className='text-[16px] text-gray-600 mt-2'>
                        Connectez-vous à votre compte
                    </p>
                </div>

                <form className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-2'>
                        <label 
                            className='text-sm font-medium text-gray-700'
                        >
                            Adresse E-mail
                        </label>
                        <input 
                            type="email" 
                            placeholder="Votre e-mail..." 
                            className="px-4 py-3 border-2 border-gray-200 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#FF6600] text-base"
                            required
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label 
                            className='text-sm font-medium text-gray-700'
                        >
                            Mot de Passe
                        </label>
                        <input 
                            type="password" 
                            placeholder="Mot de passe..." 
                            className="px-4 py-3 border-2 border-gray-200 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#FF6600] text-base"
                            required
                        />
                    </div>

                    <div className='text-right'>
                        <a 
                            href="#" 
                            className='text-sm font-medium text-[#FF6600] hover:text-[#e55c00]'
                        >
                            Mot de passe oublié ?
                        </a>
                    </div>

                    <button 
                        type="submit" 
                        className='px-6 py-3 bg-[#FF6600] text-white font-bold rounded-[10px] cursor-pointer hover:bg-[#e55c00] transition duration-200 mt-2'
                    >
                        Se Connecter
                    </button>
                </form>

                <div className='text-center mt-6'>
                    <p className='text-sm text-gray-600'>
                        Vous n'avez pas de compte ? 
                        <a 
                            href="/register" 
                            className='text-[#FF6600] font-medium ml-1 hover:text-[#e55c00]'
                        >
                            Inscrivez-vous
                        </a>
                    </p>
                </div>
            </div>
        </main>
    );
}

export default LoginPage;
