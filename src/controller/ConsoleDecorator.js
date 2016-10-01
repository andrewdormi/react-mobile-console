import {_TYPES_ARRAY} from '../const/variables';
import {EventEmitter} from 'events';
import _ from 'lodash';

class ConsoleDecorator extends EventEmitter {
    constructor() {
        super();
        this.isAlreadyInit = false;
        this.messages = [];
    }

    init() {
        if (!window || this.isAlreadyInit) {
            return this;
        }
        this.listenOnError();
        this.decorateConsole();
        this.isAlreadyInit = true;
        return this;
    }

    decorateConsole() {
        const consoleHolder = _.clone(window.console);
        _TYPES_ARRAY.forEach((type)=> {
            window.console[type] = (...args) => {
                consoleHolder[type].apply(this, args);
                this.message(args, type);
            }
        });
    }

    listenOnError() {
        const onErrorHolder = window.onerror;
        window.onerror = (...args)=> {
            if (onErrorHolder)
                onErrorHolder.apply(this, args);
            this.message(args, 'winError');
        }
    }

    message(args, type) {
        this.messages.push({args, type});
        this.emit('massage', this.messages);
    }
}

export default new ConsoleDecorator();