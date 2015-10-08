import chai from "chai";
import { combineReducers } from 'redux';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const expect = chai.expect;

describe('handleActions', () => {

    it('check computedState_@@INIT_0evaluation', () =>{
        const curState = {};
        const action = {"type":"@@INIT"};
        const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}]};
        const computedNextState = reducer(curState, action);
        expect(computedNextState).to.deep.equal(nextState);
    });

    it('check computedState_ADD_TODO_1evaluation', () =>{
        const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}]};
        const action = {"type":"ADD_TODO","text":"fdfdf"};
        const nextState = {"todos":[{"id":1,"marked":false,"text":"fdfdf"},{"text":"Use Redux","marked":false,"id":0}]};
        const computedNextState = reducer(curState, action);
        expect(computedNextState).to.deep.equal(nextState);
    });

    it('check computedState_ADD_TODO_2evaluation', () =>{
        const curState = {"todos":[{"id":1,"marked":false,"text":"fdfdf"},{"text":"Use Redux","marked":false,"id":0}]};
        const action = {"type":"ADD_TODO","text":"fdfdf"};
        const nextState = {"todos":[{"id":2,"marked":false,"text":"fdfdf"},{"id":1,"marked":false,"text":"fdfdf"},{"text":"Use Redux","marked":false,"id":0}]};
        const computedNextState = reducer(curState, action);
        expect(computedNextState).to.deep.equal(nextState);
    });


});
