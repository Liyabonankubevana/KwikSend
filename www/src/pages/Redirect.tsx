import axios from "axios";
import { useEffect } from "react";

export const Redirect: React.FC = ()=> {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const authCode = urlParams.get('hash');
        const interact = urlParams.get('interact_ref');
		console.log(urlParams)

        if (authCode) {
			console.log(authCode)
        }
        if (interact) {
            console.log(interact)
        }
        axios.post('http://localhost:3000/api/quote/accepted', {
            hash: authCode,
            interact_ref: interact
        })
    }, []);
    return <></>

}