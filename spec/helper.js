'use strict';

import 'mocha';

import sinon from 'sinon';

import chai from 'chai';
import sinonChai from 'sinon-chai';
import dirtyChai from 'dirty-chai';
import chaiString from 'chai-string';

chai.use(sinonChai);
chai.use(dirtyChai);
chai.use(chaiString);
global.expect = chai.expect;

function valOrDefault(val, defaultVal) {
    return val === undefined ? defaultVal : val;
}

beforeEach(() => {
    let sandbox = global.sandbox = sinon.sandbox.create();

    global.returns = function(val, defaultVal) {
        return sandbox.stub().returns(valOrDefault(val, defaultVal));
    };

    global.resolves = function(val, defaultVal) {
        return global.returns(Promise.resolve(valOrDefault(val, defaultVal)));
    };

    global.getArgs = function(stub, callNum = 0) {
        if (stub.callCount <= callNum) {
            throw new Error(`Stub was not called ${callNum + 1} times`);
        }

        return stub.getCall(callNum).args;
    };
});

afterEach(() => {
    if (global.sandbox) {
        global.sandbox.restore();
    }
});