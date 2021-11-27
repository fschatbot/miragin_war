import toast from "react-hot-toast";

// https://react-hot-toast.com/
const SendNotification = (message, type = "info") => {
	console.log(`${type}: ${message}`);
	toast[type === "info" ? "success" : "error"](message, {
		position: "top-right",
		autoClose: 3000,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
	});
};

export default SendNotification;
