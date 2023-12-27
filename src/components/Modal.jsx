const Modal = ({ closeModal }) => {
    return (
        <div className="fixed z-10 overflow-y-auto top-0 w-full left-0">
            <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-900 opacity-75" />
                </div>
                <span className="sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="font-bold text-lg mb-2">Hi there,</div> 
                        <div className="mb-2">Unfortunately, the API used here is free and only allows http requests which vercel does not support. If you wish to test this API, you should clone <a target="_blank" className="text-sky-600 underline" href="https://github.com/rayhanarwindra/rateshift">this repo</a> and run it on your local device.
                        </div>
                        <div className="mb-2">
                            If you are already running on local, please reconfigure your browser settings or use a different one to allow http requests.
                        </div>
                        <div className="mb-2">Sincerely,</div>
                        <div className="mb-2">an impoverished developer.</div>
                        <hr/>
                        <button
                            onClick={closeModal}
                            className="mt-3 text-md bg-[#00415A] px-3 py-2 text-white w-fit rounded-xl"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal