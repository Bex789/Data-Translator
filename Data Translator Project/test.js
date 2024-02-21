const chai = window.chai
const expect = chai.expect

// Text to other data types
describe("TextToBinary", () => {
    it("Plain Text translated to Binary", () => {
        expect(TextToBinary("Cheese")).to.deep.equal("undefinedBinary\r\n01000011 01101000 01100101 01100101 01110011 01100101 ")
    })
})

describe("TextToHex", () => {
    it("Plain Text translated to Hex", () => {
        expect(TextToHex("Cheese")).to.deep.equal("undefinedHex\r\n43 68 65 65 73 65 ")
    })
})

describe("TextToAscii", () => {
    it("Plain Text translated to Ascii", () => {
        expect(TextToAscii("Cheese")).to.deep.equal("undefinedAscii\r\n67 104 101 101 115 101 ")
    })
})

// Binary to other data types
describe("BinaryToText", () => {
    it("Binary translated to Plain Text", () => {
        expect(BinaryToText("01000011 01101000 01100101 01100101 01110011 01100101")).to.deep.equal("undefinedText\r\nCheese")
    })
})

describe("BinaryToHex", () => {
    it("Binary translated to Hex", () => {
        expect(BinaryToHex("01000011 01101000 01100101 01100101 01110011 01100101")).to.deep.equal("undefinedHex\r\n43 68 65 65 73 65 ")
    })
})

describe("BinaryToAscii", () => {
    it("Binary translated to Ascii", () => {
        expect(BinaryToAscii("01000011 01101000 01100101 01100101 01110011 01100101")).to.deep.equal("undefinedAscii\r\n67 104 101 101 115 101 ")
    })
})

// Hex to other data types
describe("HexToText", () => {
    it("Hex translated to Plain Text", () => {
        expect(HexToText("43 68 65 65 73 65")).to.deep.equal("undefinedText\r\nCheese")
    })
})

describe("HexToBinary", () => {
    it("Hex translated to Binary", () => {
        expect(HexToBinary("43 68 65 65 73 65")).to.deep.equal("undefinedBinary\r\n01000011 01101000 01100101 01100101 01110011 01100101 ")
    })
})

describe("HexToAscii", () => {
    it("Hex translated to Ascii", () => {
        expect(HexToAscii("43 68 65 65 73 65")).to.deep.equal("undefinedAscii\r\n67 104 101 101 115 101 ")
    })
})

// Ascii to other data types
describe("AsciiToText", () => {
    it("Ascii translated to Plain Text", () => {
        expect(AsciiToText("67 104 101 101 115 101")).to.deep.equal("undefinedText\r\nCheese")
    })
})

describe("AsciiToBinary", () => {
    it("Ascii translated to Binary", () => {
        expect(AsciiToBinary("67 104 101 101 115 101")).to.deep.equal("undefinedBinary\r\n01000011 01101000 01100101 01100101 01110011 01100101 ")
    })
})

describe("AsciiToHex", () => {
    it("Ascii translated to Hex", () => {
        expect(AsciiToHex("67 104 101 101 115 101")).to.deep.equal("undefinedHex\r\n43 68 65 65 73 65 ")
    })
})