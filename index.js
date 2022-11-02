function receivesAFunction(callbackFn) {
    return callbackFn();
};

function returnsANamedFunction() {
    function namedFunction() {
        return "I have a name!";
    };
    return namedFunction;
};

function returnsAnAnonymousFunction() {
    return function() {
        return "I am an anonymous function!";
    };
};
