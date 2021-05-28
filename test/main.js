const assert   = require('assert')
const romanize = require('../src/romanize')

describe('basic', function() {
    it('is correct', function() {
        assert.equal(romanize('\u0391'), 'A')
        assert.equal(romanize('\u0392'), 'B')
        assert.equal(romanize('\u0393'), 'G')
        assert.equal(romanize('\u0394'), 'D')
        assert.equal(romanize('\u0395'), 'E')
        assert.equal(romanize('\u0396'), 'Z')
        assert.equal(romanize('\u0397'), 'I')
        assert.equal(romanize('\u0398'), 'TH')
        assert.equal(romanize('\u0399'), 'I')
        assert.equal(romanize('\u039a'), 'K')
        assert.equal(romanize('\u039b'), 'L')
        assert.equal(romanize('\u039c'), 'M')
        assert.equal(romanize('\u039d'), 'N')
        assert.equal(romanize('\u039e'), 'X')
        assert.equal(romanize('\u039f'), 'O')
        assert.equal(romanize('\u03a0'), 'P')
        assert.equal(romanize('\u03a1'), 'R')
        assert.equal(romanize('\u03a3'), 'S')
        assert.equal(romanize('\u03a4'), 'T')
        assert.equal(romanize('\u03a5'), 'Y')
        assert.equal(romanize('\u03a6'), 'PH')
        assert.equal(romanize('\u03a7'), 'CH')
        assert.equal(romanize('\u03a8'), 'PS')
        assert.equal(romanize('\u03a9'), 'O')
        assert.equal(romanize('\u0393\u0393'), 'NG')
        assert.equal(romanize('\u0393\u039e'), 'NX')
        assert.equal(romanize('\u0393\u03a7'), 'NCH')
    })
})

describe('diphthong', function() {
    it('is correct', function() {
        assert.equal(romanize('\u0391\u03a5'), 'AU')
        assert.equal(romanize('\u0395\u03a5'), 'EU')
        assert.equal(romanize('\u0397\u03a5'), 'IU')
        assert.equal(romanize('\u039f\u03a5'), 'OU')
        assert.equal(romanize('\u03a5\u0399'), 'UI')
        assert.equal(romanize('\u03a9\u03a5'), 'OU')
    })
})

describe('initially', function() {
    it('is correct', function() {
        assert.equal(romanize('ΓΚ'), 'GK')
        assert.equal(romanize('ΓΚΠ'), 'GKP')
        assert.equal(romanize('ΜΠ'), 'B')
        assert.equal(romanize('ΜΠΠ'), 'BP')
        assert.equal(romanize('ΝΤ'), 'D')
        assert.equal(romanize('ΝΤΠ'), 'DP')
    })
})

describe('finally', function() {
    it('is correct', function() {
        assert.equal(romanize('ΓΚ'), 'GK')
        assert.equal(romanize('ΠΓΚ'), 'PGK')
        assert.equal(romanize('ΠΜΠ'), 'PMP')
        assert.equal(romanize('ΠΜΠ'), 'PMP')
        assert.equal(romanize('ΠΝΤ'), 'PNT')
    })
})

describe('medially', function() {
    it('is correct', function() {
        assert.equal(romanize('ΠΓΚΠ'), 'PNKP')
        assert.equal(romanize('ΠΜΠΠ'), 'PMPP')
        assert.equal(romanize('ΠΝΤΠ'), 'PNTP')
    })
})
