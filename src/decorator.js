var consoleHolder;
var beforeDomReadyQueue;

function mobileConsole() {
}

window.mobileConsole = mobileConsole;

mobileConsole.prototype.init = mobileConsole.init = function () {
    initEventListeners();
    if (document.readyState === "complete") {
        // initUI();
    }

    consoleHolder = window.console;
    window.console = customConsole;
    initErrorListener();
};

function initEventListeners() {
    window.addEventListener('load', onDOMLoaded);
}

function removeListeners() {
    window.removeEventListener('load', onDOMLoaded);
    window.onerror = oldOnError;
}

function onDOMLoaded() {
    for (var i = 0, l = beforeDomReadyQueue.length; i < l; i++) {
        var msgElement = beforeDomReadyQueue[i];
        console[msgElement.type](msgElement.msg);
    }
}

function customConsole() {
}

customConsole.log = function (msg) {
    this.message(msg, 'log');
};

customConsole.warn = function (msg) {
    this.message(msg, 'warn');
};

customConsole.error = function (msg) {
    this.message(msg, 'error');
};

function initErrorListener() {
    window.onerror = function (msg, url, line) {
        if (oldOnError)
            oldOnError(msg, url, line);
        console.error(msg);
    };
}

customConsole.message = function (msg, type) {
    if (document.readyState !== 'complete') {
        addToQueue(msg, type);
        return;
    }
    consoleHolder[type](msg);
    consoleComponent.appendChild(createConsoleMessage(msg, type));
    scrollBottom(consoleComponent);
};
