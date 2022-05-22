import DisplayMessage from "../../components/DisplayMessage.js";

const handelLoginSignUp = async (data, url) => {
    let userData = {};

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        console.log(json)

        if (!json.statusCode === 200) {
            throw new Error(
                `Status code: ${json.statusCode}, Error: ${json.error}, Message: ${json.message[0].messages[0].message}`
            );
        }

        userData = json;
    } catch (error) {
        console.warn(error);
        DisplayMessage(
            "danger",
            "Email or password are invalid",
            ".message-container"
        );
    } finally {
        return userData;
    }
};

export default handelLoginSignUp;
