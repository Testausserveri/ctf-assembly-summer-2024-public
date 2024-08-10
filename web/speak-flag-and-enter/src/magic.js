const runes = {
    "A": "ᚠ", "B": "ᚢ", "C": "ᚦ", "D": "ᚨ", "E": "ᚱ", "F": "ᚲ", "G": "ᚷ", "H": "ᚹ", "I": "ᚺ", "J": "ᚾ",
    "K": "ᛁ", "L": "ᛃ", "M": "ᛇ", "N": "ᛈ", "O": "ᛉ", "P": "ᛊ", "Q": "ᛏ", "R": "ᛒ", "S": "ᛖ", "T": "ᛗ",
    "U": "ᛚ", "V": "ᛜ", "W": "ᛝ", "X": "ᛟ", "Y": "ᛞ", "Z": "ᚥ", "a": "ᛡ", "b": "ᛠ", "c": "ᛣ", "d": "ᛤ",
    "e": "ᛥ", "f": "ᛦ", "g": "ᛧ", "h": "ᛨ", "i": "ᛩ", "j": "ᛪ", "k": "᛫", "l": "᛬", "m": "᛭", "n": "ᛮ",
    "o": "ᛯ", "p": "ᛰ", "q": "q", "r": "r", "s": "s", "t": "t", "u": "u", "v": "v", "w": "w", "x": "x",
    "y": "y", "z": "᛺", "0": "0", "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7",
    "8": "8", "9": "9", " ": " ", "{": "{", "}": "}", "!": "!"
}

// TODO: Remove this to ensure magic does not leak!
/*function makeMagic(text) {
    const chars = text.split("")
        .map((char) => char.charCodeAt(0))
        
    const positions = chars.map((v, i) => ({ i, v }))
        .sort(() => Math.random() - 0.5)
        .map((obj) => `${obj.i} ${String.fromCharCode(obj.v)}`)
        .map((str) => str.split("").map((char) => runes[char]).join(""))
        .join(". ")

    console.log(positions)
}*/

function magic(flag) {
    const secret = document.getElementById("magic").innerText
        .split(". ")
        .map((word) => word.split("").map((rune) => Object.keys(runes).filter((plainChar) => runes[plainChar] === rune)[0]).join(""))
        .map((word) => ({ i: Number(word.split(" ")[0]), v: word.split(" ")[1] }))
        .sort(({ i: aI }, { i: bI }) => aI - bI)
        .map(({ v }) => v)
        .join("")

    if (flag === secret) {
        document.getElementById("result").innerText = `You shall pass, mellon: ${secret}`
    } else {
        document.getElementById("result").innerText = "You shall not pass!"
    }
}
