//run tests in this file
const lib = require('./lib.js')

describe("Runs tests", () => {
    test('test setup working', () => {
        //ARRANGE
        const string = "working test"
        const expected = string

        //ACT
        let actual = lib.test(string)

        //ASSERT
        expect(actual).toBe(expected)
    })
})

// test that single frame can be scored

describe('Scores a normal frame', () => {
    test('Add normal frames', () => {
        //ARRANGE
        const frames = [1, 2]
        const expected = 3

        //ACT
        //const actual = frame.reduce((total, ball) => total + ball)
        const func = lib.normal(frames)


        //ASSERT
        //expect(actual).toEqual(expected)
        expect(func).toEqual(expected)
        
    })
})

//test that spare can be scored
describe('Score a spare', () => {
    test('Adds up total for a spare', () => {
        //ARRANGE
        const frame = [6, 4] 
        const nextFrame = [1, 2]
        const expected = 11

        //ACT
        let actual = lib.spare(frame, nextFrame)

        //ASSERT
        expect(actual).toEqual(expected)
    })
})

//test that strike can be scored
describe('Score a strike', () => {
    test('Adds strike score', () => {
        //ARRANGE
        const frame = [10, 0]
        const nextFrame = [1, 2]
        const expected = 13

        //ACT
        let actual = lib.strike(frame, nextFrame)

        //ASSERT
        expect(actual).toEqual(expected)
    })
})
