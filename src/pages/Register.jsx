function RegisterPage() {
    return (
        <main className='min-h-screen flex items-center justify-center bg-gray-50 py-24 px-4'>
            <div className='w-full max-w-lg bg-white rounded-[10px] shadow-xl p-8 sm:p-10'>
                <div className='flex flex-col items-center mb-8'>
                    <h1 className='text-[32px] font-bold leading-10 text-black'>
                        Créer un Compte
                    </h1>
                    <p className='text-[16px] text-gray-600 mt-2'>
                        Rejoignez-nous et commencez l'aventure
                    </p>
                </div>

                <form className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-2'>
                        <label
                            className='text-sm font-medium text-gray-700'
                        >
                            Nom Complet
                        </label>
                        <input
                            type="text"
                            placeholder="Votre nom et prénom..."
                            className="px-4 py-3 border-2 border-gray-200 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#FF6600] text-base"
                            required
                        />
                    </div>

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
                            placeholder="Créez un mot de passe..."
                            className="px-4 py-3 border-2 border-gray-200 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#FF6600] text-base"
                            required
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label
                            className='text-sm font-medium text-gray-700'
                        >
                            Confirmer le Mot de Passe
                        </label>
                        <input
                            type="password"
                            placeholder="Confirmez le mot de passe..."
                            className="px-4 py-3 border-2 border-gray-200 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#FF6600] text-base"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className='px-6 py-3 bg-[#FF6600] text-white font-bold rounded-[10px] cursor-pointer hover:bg-[#e55c00] transition duration-200 mt-4'
                    >
                        S'inscrire
                    </button>
                </form>

                <div className='text-center mt-6'>
                    <p className='text-sm text-gray-600'>
                        Vous avez déjà un compte ?
                        <a
                            href="/login"
                            className='text-[#FF6600] font-medium ml-1 hover:text-[#e55c00]'
                        >
                            Connectez-vous
                        </a>
                    </p>
                </div>
            </div>
        </main>
    );
}

export default RegisterPage;
