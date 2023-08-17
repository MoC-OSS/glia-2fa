import API from "./api";
import API_ROUTES from "./api-routes";

const twilioService = {
    async startVerify(toPhoneNumber) {
        const response = await API.post(
            API_ROUTES.start_verify,
            { to: toPhoneNumber }
        );

        return response.data;
    },

    async checkVerify(toPhoneNumber, verifyCode) {
        const response = await API.post(
            API_ROUTES.check_verify,
            {
                to: toPhoneNumber,
                code: verifyCode
            }
        );

        return response.data;
    },

    async cancelVerify(toPhoneNumber) {
        const response = await API.post(
            API_ROUTES.cancel_verify,
            { to: toPhoneNumber }
        );

        return response.data;
    },
};

export default twilioService;
