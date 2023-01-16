import axios from "axios";
import mem from "mem";

const accessToken = window.localStorage.getItem("accessToken");
const tokenExpiresIn = window.localStorage.getItem("tokenExpiresIn");
const now = new Date().getTime();
const diff = tokenExpiresIn - now;

const Axios = axios.create({
    headers: { Authorization: `Bearer ${accessToken}` },
});
const refresh = mem(
    () => {
        console.log(diff);
        if (diff < 60000) {
            let body = {
                accessToken: accessToken,
            };

            axios
                .post("/auth/refresh", body)
                .then((res) => {
                    console.log("wow");
                    //localStorage
                    window.localStorage.clear();
                    localStorage.setItem("accessToken", res.data.accessToken);
                    localStorage.setItem(
                        "tokenExpiresIn",
                        new Date().getTime() + 1800000
                    );
                })
                .catch((err) => {
                    if (
                        err.response.data.message === "만료된 JWT 토큰입니다."
                    ) {
                        //logout
                        window.localStorage.clear();
                        delete axios.defaults.headers.common["Authorization"];
                    } else {
                        console.log(err);
                    }
                });
        }
    },
    { maxAge: 2000 }
);

Axios.interceptors.request.use(
    function (config) {
        refresh();
        return config;
    },
    function (err) {
        refresh();
        return Promise.reject(err);
    }
);

export default Axios;
