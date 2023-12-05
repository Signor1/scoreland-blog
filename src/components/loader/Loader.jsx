import { BallTriangle } from "react-loader-spinner"


const Loader = () => {
    return (
        <div className="w-full h-screen bg-gray-950 flex flex-col justify-center items-center z-[9999] fixed top-0 left-0">
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#ea580c"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            />
        </div>
    )
}

export default Loader