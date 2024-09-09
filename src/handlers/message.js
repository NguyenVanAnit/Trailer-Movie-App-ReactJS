import { message } from "antd";

const dispatchMessage = (type, message) => {
    const [messageApi, contextHolder] = message.useMessage();

    const message = (type, message) => {
        if (type == 'error') {
            messageApi.open({
                type: 'error',
                content: message
            })
        } else if (type == 'success') {
            messageApi.open({
                type: 'success',
                content: message
            })
        } else if (type == 'warning') {
            messageApi.open({
                type: 'warning',
                content: message
            })
        } else {
            messageApi.open({
                type: 'warning',
                content: 'WARNING'
            })
        }
    }

    message(type, message);

    return { contextHolder };
}

export default dispatchMessage;