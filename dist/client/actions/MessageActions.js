import firebase from "firebase";
export const addMessage = msg => (Object.assign({ type: "ADD_MESSAGE" }, msg));
export const sendMessage = text => {
    return function (dispatch) {
        let msg = {
            id: null,
            text: text,
            time: Date.now()
        };
        const newMsgRef = firebase
            .database()
            .ref("messages")
            .push();
        msg.id = newMsgRef.key;
        newMsgRef.set(msg);
        dispatch(addMessage(msg));
    };
};
export const startFetchingMessages = () => ({
    type: "START_FETCHING_MESSAGES"
});
export const receivedMessages = () => ({
    type: "RECEIVED_MESSAGES",
    receivedAt: Date.now()
});
export const fetchMessages = () => {
    return function (dispatch) {
        dispatch(startFetchingMessages());
        firebase
            .database()
            .ref("messages")
            .orderByKey()
            .limitToLast(20)
            .on("value", snapshot => {
            // gets around Redux panicking about actions in reducers
            setTimeout(() => {
                const messages = snapshot.val() || [];
                dispatch(receiveMessages(messages));
            }, 0);
        });
    };
};
export const receiveMessages = messages => {
    return function (dispatch) {
        console.log(messages);
        //  Object.values(messages).forEach(msg => dispatch(addMessage(msg)))
        dispatch(receivedMessages());
    };
};
export const updateMessagesHeight = event => {
    const layout = event.nativeEvent.layout;
    return { type: "UPDATE_MESSAGES_HEIGHT", height: layout.height };
};
//# sourceMappingURL=MessageActions.js.map