var Messaging;
(function (Messaging) {
    var Message = (function () {
        function Message() {
        }
        return Message;
    })();

    function subscribe(callback, subscriberName) {
    }
    Messaging.subscribe = subscribe;
    ;

    function sendMessage(subscriberName, message) {
    }
    Messaging.sendMessage = sendMessage;
    ;
})(Messaging || (Messaging = {}));
;
//# sourceMappingURL=MessagingModule.js.map
