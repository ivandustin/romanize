(function() {
const overline = '\u0305'
const mapping  = [
    [/^ΝΤ/g, 'D'],
    [/^ΜΠ/g, 'B'],
    [/(.)ΓΚ(.)/g, '$1NK$2'],
    [/ΓΞ/g, 'NX'],
    [/ΓΧ/g, 'NCH'],
    [/ΓΓ/g, 'NG'],
    [/ΑΥ/g, 'AU'],
    [/ΕΥ/g, 'EU'],
    [/ΗΥ/g, 'IU'],
    [/ΟΥ/g, 'OU'],
    [/ΥΙ/g, 'UI'],
    [/ΩΥ/g, 'OU'],
    [/Α/g, 'A'],
    [/Β/g, 'B'],
    [/Γ/g, 'G'],
    [/Δ/g, 'D'],
    [/Ε/g, 'E'],
    [/Ζ/g, 'Z'],
    [/Η/g, 'I'],
    [/Θ/g, 'TH'],
    [/Ι/g, 'I'],
    [/Κ/g, 'K'],
    [/Λ/g, 'L'],
    [/Μ/g, 'M'],
    [/Ν/g, 'N'],
    [/Ξ/g, 'X'],
    [/Ο/g, 'O'],
    [/Π/g, 'P'],
    [/Ρ/g, 'R'],
    [/Σ/g, 'S'],
    [/Τ/g, 'T'],
    [/Υ/g, 'Y'],
    [/Φ/g, 'PH'],
    [/Χ/g, 'CH'],
    [/Ψ/g, 'PS'],
    [/Ω/g, 'O']
]

function romanize(word) {
    if (!overlined(word)) {
        mapping.forEach(function(item) {
            let [ needle, replacement ] = item
            word = word.replace(needle, replacement)
        })
    }
    return word
}

function overlined(word) {
    if (word.length % 2 == 0) {
        for (let i = 1; i < word.length; i += 2)
            if (word[i] != overline)
                return false
        return true
    }
    return false
}

try { module.exports  = romanize } catch(e) {}
try { window.romanize = romanize } catch(e) {}
})()
