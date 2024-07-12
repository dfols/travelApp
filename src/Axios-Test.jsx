import axios from "axios"

function Axios-Test(){
    return(
        <>
        const getCustomersData = () => {
            axios
                .get("https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1")
                .then(data => console.log(data.data))
                .catch(error => console.log(error));
        };
        getCustomersData();
        </>
    )


}
export default Axios-Test