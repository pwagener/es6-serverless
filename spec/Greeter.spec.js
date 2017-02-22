'use strict';

import './helper';

import Greeter from '../src/Greeter';

describe('The Greeting module', () => {

    it('provides a function', () => {
        expect(Greeter).to.be.a('function');
    });

    describe('when greeting with a name', () => {
        let greeting;

        beforeEach(() => {
            const greeter = new Greeter('Peter');
            greeting = greeter.greet();
        });

        it('provides a custom greeting', () => {
            expect(greeting).to.equal('Hello, Peter!');
        });
    });

    describe('when created without a name', () => {
        let greeting;

        beforeEach(() => {
            const greeter = new Greeter();
            greeting = greeter.greet();
        });

        it('provides a generic greeting', () => {
            expect(greeting).to.equal('Hello, Anonymous Person!');
        });
    });
});

