import { RotatingLines } from "react-loader-spinner";

const Loader = ({ size }: {
    size: number
}) => {
    return (
        <RotatingLines
            visible={true}
            width={size ? `${size}` : "25"}
            strokeWidth="5"
            animationDuration="0.25"
            ariaLabel="rotating-lines-loading"
            strokeColor="#1e293b"
        />
    )
}

export default Loader