/*
 * jQuery WinGreek Converter: jQuery plugin to convert WinGreek to Unicode
 *
 * © 2012 Sean Redmond.
 *
 * This file is part of jQuery WinGreek Converter.
 * 
 * jQuery WinGreek Converter is free software: you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or (at your
 * option) any later version.
 * 
 * jQuery WinGreek Converter is distributed in the hope that it will be 
 * useful, but WITHOUT ANY WARRANTY; without even the implied warranty of 
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General 
 * Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License along
 * w/ jQuery WinGreek Converter.  If not, see 
 * <http://www.gnu.org/licenses/>.
 */

(function ($) {
    "use strict";


    var alphabet = {
        '\x21': '\u2199', //  south west arrow
        '\x22': '\u03E0', //  greek letter sampi
        '\x23': '\u03DC', //  greek letter digamma
        '\x24': '\u03DA', //  greek letter stigma
        '\x25': '\u03D8', //  greek letter archaic koppa
        '\x26': '\u03F2', //  greek lunate sigma symbol
        '\x27': '\u1FBF', //  greek psili
        '\x2b': '\u203B', //  reference mark
        '\x2f': '\u1FFD', //  greek oxia
        '\x3a': '\u0387', //  greek ano teleia
        '\x3b': '\u037E', //  greek question mark
        '\x40': '\u00A8', //  diaeresis
        '\x41': '\u0391', //  greek capital letter alpha
        '\x42': '\u0392', //  greek capital letter beta
        '\x43': '\u03A7', //  greek capital letter chi
        '\x44': '\u0394', //  greek capital letter delta
        '\x45': '\u0395', //  greek capital letter epsilon
        '\x46': '\u03A6', //  greek capital letter phi
        '\x47': '\u0393', //  greek capital letter gamma
        '\x48': '\u0397', //  greek capital letter eta
        '\x49': '\u0399', //  greek capital letter iota
        '\x4a': '\u1FF3', //  greek small letter omega with ypogegrammeni
        '\x4b': '\u039A', //  greek capital letter kappa
        '\x4c': '\u039B', //  greek capital letter lamda
        '\x4d': '\u039C', //  greek capital letter mu
        '\x4e': '\u039D', //  greek capital letter nu
        '\x4f': '\u039F', //  greek capital letter omicron
        '\x50': '\u03A0', //  greek capital letter pi
        '\x51': '\u0398', //  greek capital letter theta
        '\x52': '\u03A1', //  greek capital letter rho
        '\x53': '\u03A3', //  greek capital letter sigma
        '\x54': '\u03A4', //  greek capital letter tau
        '\x55': '\u03A5', //  greek capital letter upsilon
        '\x56': '\u1FC3', //  greek small letter eta with ypogegrammeni
        '\x57': '\u03A9', //  greek capital letter omega
        '\x58': '\u039E', //  greek capital letter xi
        '\x59': '\u03A8', //  greek capital letter psi
        '\x5a': '\u0396', //  greek capital letter zeta
        '\x5c': '\u1FEF', //  greek varia
        '\x5e': '\u1FC0', //  greek perispomeni
        '\x60': '\u1FFE', //  greek dasia
        '\x61': '\u03B1', //  greek small letter alpha
        '\x62': '\u03B2', //  greek small letter beta
        '\x63': '\u03C7', //  greek small letter chi
        '\x64': '\u03B4', //  greek small letter delta
        '\x65': '\u03B5', //  greek small letter epsilon
        '\x66': '\u03C6', //  greek small letter phi
        '\x67': '\u03B3', //  greek small letter gamma
        '\x68': '\u03B7', //  greek small letter eta
        '\x69': '\u03B9', //  greek small letter iota
        '\x6a': '\u03C2', //  greek small letter final sigma
        '\x6b': '\u03BA', //  greek small letter kappa
        '\x6c': '\u03BB', //  greek small letter lamda
        '\x6d': '\u03BC', //  greek small letter mu
        '\x6e': '\u03BD', //  greek small letter nu
        '\x6f': '\u03BF', //  greek small letter omicron
        '\x70': '\u03C0', //  greek small letter pi
        '\x71': '\u03B8', //  greek small letter theta
        '\x72': '\u03C1', //  greek small letter rho
        '\x73': '\u03C3', //  greek small letter sigma
        '\x74': '\u03C4', //  greek small letter tau
        '\x75': '\u03C5', //  greek small letter upsilon
        '\x76': '\u1FB3', //  greek small letter alpha with ypogegrammeni
        '\x77': '\u03C9', //  greek small letter omega
        '\x78': '\u03BE', //  greek small letter xi
        '\x79': '\u03C8', //  greek small letter psi
        '\x7a': '\u03B6', //  greek small letter zeta
        '\x80': '\u00ab', //  left-pointing double angle quotation mark
        '\x81': '\u00bb', //  right-pointing double angle quotation mark
        '\x83': '\u1F31', //  greek small letter iota with dasia
        '\x84': '\u1F30', //  greek small letter iota with psili
        '\x85': '\u1F77', //  greek small letter iota with oxia
        '\x86': '\u1F35', //  greek small letter iota with dasia and oxia
        '\x87': '\u1F34', //  greek small letter iota with psili and oxia
        '\x88': '\u1F76', //  greek small letter iota with varia
        '\x89': '\u1F33', //  greek small letter iota with dasia and varia
        '\x8a': '\u1F32', //  greek small letter iota with psili and varia
        '\x8b': '\u1FD6', //  greek small letter iota with perispomeni
        '\x8c': '\u1F37', //  greek small letter iota with dasia and perispomeni
        '\x8d': '\u1F36', //  greek small letter iota with psili and perispomeni
        '\x8e': '\u03CA', //  greek small letter iota with dialytika
        '\x8f': '\u1FD3', //  greek small letter iota with dialytika and oxia
        '\x90': '\u1FD2', //  greek small letter iota with dialytika and varia
        '\x91': '\u1FDF', //  greek dasia and perispomeni
        '\x92': '\u1FCF', //  greek psili and perispomeni
        '\x93': '\u1FDE', //  greek dasia and oxia
        '\x94': '\u1FCE', //  greek psili and oxia
        '\x95': '\u1FDD', //  greek dasia and varia
        '\x96': '\u1FCD', //  greek psili and varia
        '\x97': '\u1FEE', //  greek dialytika and oxia
        '\x98': '\u1F11', //  greek small letter epsilon with dasia
        '\x99': '\u1F10', //  greek small letter epsilon with psili
        '\x9a': '\u1F73', //  greek small letter epsilon with oxia
        '\x9b': '\u1F15', //  greek small letter epsilon with dasia and oxia
        '\x9c': '\u1F14', //  greek small letter epsilon with psili and oxia
        '\x9d': '\u1F72', //  greek small letter epsilon with varia
        '\x9e': '\u1F13', //  greek small letter epsilon with dasia and varia
        '\x9f': '\u1F12', //  greek small letter epsilon with psili and varia
        '\xa1': '\u1F01', //  greek small letter alpha with dasia
        '\xa2': '\u1F00', //  greek small letter alpha with psili
        '\xa3': '\u1F71', //  greek small letter alpha with oxia
        '\xa4': '\u1F05', //  greek small letter alpha with dasia and oxia
        '\xa5': '\u1F04', //  greek small letter alpha with psili and oxia
        '\xa6': '\u1F70', //  greek small letter alpha with varia
        '\xa7': '\u1F03', //  greek small letter alpha with dasia and varia
        '\xa8': '\u1F02', //  greek small letter alpha with psili and varia
        '\xa9': '\u1FB6', //  greek small letter alpha with perispomeni
        '\xaa': '\u1F07', //  greek small letter alpha with dasia and perispomeni
        '\xab': '\u1F06', //  greek small letter alpha with psili and perispomeni
        '\xac': '\u1F81', //  greek small letter alpha with dasia and ypogegrammeni
        '\xad': '\u1F80', //  greek small letter alpha with psili and ypogegrammeni
        '\xae': '\u1FB4', //  greek small letter alpha with oxia and ypogegrammeni
        '\xaf': '\u1F85', //  greek small letter alpha with dasia and oxia and ypogegrammeni
        '\xb0': '\u1F84', //  greek small letter alpha with psili and oxia and ypogegrammeni
        '\xb1': '\u1FB2', //  greek small letter alpha with varia and ypogegrammeni
        '\xb2': '\u1F83', //  greek small letter alpha with dasia and varia and ypogegrammeni
        '\xb3': '\u1F82', //  greek small letter alpha with psili and varia and ypogegrammeni
        '\xb4': '\u1FB7', //  greek small letter alpha with perispomeni and ypogegrammeni
        '\xb5': '\u1F87', //  greek small letter alpha with dasia and perispomeni and ypogegrammeni
        '\xb6': '\u1F86', //  greek small letter alpha with psili and perispomeni and ypogegrammeni
        '\xb7': '\u1FE5', //  greek small letter rho with dasia
        '\xb8': '\u1FE4', //  greek small letter rho with psili
        '\xb9': '\u1F21', //  greek small letter eta with dasia
        '\xba': '\u1F20', //  greek small letter eta with psili
        '\xbb': '\u1F75', //  greek small letter eta with oxia
        '\xbc': '\u1F25', //  greek small letter eta with dasia and oxia
        '\xbd': '\u1F24', //  greek small letter eta with psili and oxia
        '\xbe': '\u1F74', //  greek small letter eta with varia
        '\xbf': '\u1F23', //  greek small letter eta with dasia and varia
        '\xc0': '\u1F22', //  greek small letter eta with psili and varia
        '\xc1': '\u1FC6', //  greek small letter eta with perispomeni
        '\xc2': '\u1F27', //  greek small letter eta with dasia and perispomeni
        '\xc3': '\u1F26', //  greek small letter eta with psili and perispomeni
        '\xc4': '\u037A', //  greek ypogegrammeni
        '\xc5': '\u1F91', //  greek small letter eta with dasia and ypogegrammeni
        '\xc6': '\u1F90', //  greek small letter eta with psili and ypogegrammeni
        '\xc7': '\u1FC4', //  greek small letter eta with oxia and ypogegrammeni
        '\xc8': '\u1F95', //  greek small letter eta with dasia and oxia and ypogegrammeni
        '\xc9': '\u1F94', //  greek small letter eta with psili and oxia and ypogegrammeni
        '\xca': '\u1FC2', //  greek small letter eta with varia and ypogegrammeni
        '\xcb': '\u1F93', //  greek small letter eta with dasia and varia and ypogegrammeni
        '\xcc': '\u1F92', //  greek small letter eta with psili and varia and ypogegrammeni
        '\xcd': '\u1FC7', //  greek small letter eta with perispomeni and ypogegrammeni
        '\xce': '\u1F97', //  greek small letter eta with dasia and perispomeni and ypogegrammeni
        '\xcf': '\u1F96', //  greek small letter eta with psili and perispomeni and ypogegrammeni
        '\xd0': '\u1F41', //  greek small letter omicron with dasia
        '\xd1': '\u1F40', //  greek small letter omicron with psili
        '\xd2': '\u1F79', //  greek small letter omicron with oxia
        '\xd3': '\u1F45', //  greek small letter omicron with dasia and oxia
        '\xd4': '\u1F44', //  greek small letter omicron with psili and oxia
        '\xd5': '\u1F78', //  greek small letter omicron with varia
        '\xd6': '\u1F43', //  greek small letter omicron with dasia and varia
        '\xd7': '\u1F42', //  greek small letter omicron with psili and varia
        '\xd8': '\u1F51', //  greek small letter upsilon with dasia
        '\xd9': '\u1F50', //  greek small letter upsilon with psili
        '\xda': '\u1F7B', //  greek small letter upsilon with oxia
        '\xdb': '\u1F55', //  greek small letter upsilon with dasia and oxia
        '\xdc': '\u1F54', //  greek small letter upsilon with psili and oxia
        '\xdd': '\u1F7A', //  greek small letter upsilon with varia
        '\xde': '\u1F53', //  greek small letter upsilon with dasia and varia
        '\xdf': '\u1F52', //  greek small letter upsilon with psili and varia
        '\xe0': '\u1FE6', //  greek small letter upsilon with perispomeni
        '\xe1': '\u1F57', //  greek small letter upsilon with dasia and perispomeni
        '\xe2': '\u1F56', //  greek small letter upsilon with psili and perispomeni
        '\xe3': '\u03CB', //  greek small letter upsilon with dialytika
        '\xe4': '\u1FE3', //  greek small letter upsilon with dialytika and oxia
        '\xe5': '\u1FE2', //  greek small letter upsilon with dialytika and varia
        '\xe6': '\u1F61', //  greek small letter omega with dasia
        '\xe7': '\u1F60', //  greek small letter omega with psili
        '\xe8': '\u1F7D', //  greek small letter omega with oxia
        '\xe9': '\u1F65', //  greek small letter omega with dasia and oxia
        '\xea': '\u1F64', //  greek small letter omega with psili and oxia
        '\xeb': '\u1F7C', //  greek small letter omega with varia
        '\xec': '\u1F63', //  greek small letter omega with dasia and varia
        '\xed': '\u1F62', //  greek small letter omega with psili and varia
        '\xee': '\u1FF6', //  greek small letter omega with perispomeni
        '\xef': '\u1F67', //  greek small letter omega with dasia and perispomeni
        '\xf0': '\u1F66', //  greek small letter omega with psili and perispomeni
        '\xf1': '\u1FA1', //  greek small letter omega with dasia and ypogegrammeni
        '\xf2': '\u1FA0', //  greek small letter omega with psili and ypogegrammeni
        '\xf3': '\u1FF4', //  greek small letter omega with oxia and ypogegrammeni
        '\xf4': '\u1FA5', //  greek small letter omega with dasia and oxia and ypogegrammeni
        '\xf5': '\u1FA4', //  greek small letter omega with psili and oxia and ypogegrammeni
        '\xf6': '\u1FF2', //  greek small letter omega with varia and ypogegrammeni
        '\xf7': '\u1FA3', //  greek small letter omega with dasia and varia and ypogegrammeni
        '\xf8': '\u1FA2', //  greek small letter omega with psili and varia and ypogegrammeni
        '\xf9': '\u1FF7', //  greek small letter omega with perispomeni and ypogegrammeni
        '\xfa': '\u1FA7', //  greek small letter omega with dasia and perispomeni and ypogegrammeni
        '\xfb': '\u1FA6', //  greek small letter omega with psili and perispomeni and ypogegrammeni
        '\xfc': '\u1FB5', // greek small letter epsilon with perispomeni
        '\xfd': '\u1FC5'  // greek small letter omicron with perispomeni
    },
        ansi_conversion = {
            '\u20ac': '\x80', // left-pointing double angle quotation mark
            // // no mapping 0x0081   varia
            // // no mapping 0x0082   perispomeni
            // '\u201a': '\x82', // small alpha w/ dasia & varia
            '\u0192': '\x83', // greek small letter iota with dasia
            '\u201e': '\x84', // greek small letter iota with psili
            '\u2026': '\x85', // greek small letter iota with oxia
            '\u2020': '\x86', // greek small letter iota with dasia and oxia
            '\u2021': '\x87', // greek small letter iota with psili and oxia
            '\u02c6': '\x88', // greek small letter iota with varia
            '\u2030': '\x89', // greek small letter iota with dasia and varia
            '\u0160': '\x8a', // greek small letter iota with psili and varia
            '\u2039': '\x8b', // greek small letter iota with perispomeni
            '\u0152': '\x8c', // greek small letter iota with dasia and perispomeni
            // no mapping 0x008d   greek small letter iota with psili and perispomeni
            '\u017d': '\x8e', // greek small letter iota with dialytika
            // no mapping 0x008f   greek small letter iota with dialytika and oxia
            // no mapping 0x0090   greek small letter iota with dialytika and varia
            '\u2018': '\x91', // greek dasia and perispomeni
            '\u2019': '\x92', // greek psili and perispomeni
            '\u201c': '\x93', // greek dasia and oxia
            '\u201d': '\x94', // greek psili and oxia
            '\u2022': '\x95', // greek dasia and varia
            '\u2013': '\x96', // greek psili and varia
            '\u2014': '\x97', // greek dialytika and oxia
            '\u02dc': '\x98', // greek small letter epsilon with dasia
            '\u2122': '\x99', // greek small letter epsilon with psili
            '\u0161': '\x9a', // greek small letter epsilon with oxia
            '\u203a': '\x9b', // greek small letter epsilon with dasia and oxia
            '\u0153': '\x9c', // greek small letter epsilon with psili and oxia
            // no mapping 0x009d   greek small letter epsilon with varia
            '\u017e': '\x9e', // greek small letter epsilon with dasia and varia
            '\u0178': '\x9f'  // greek small letter epsilon with psili and varia
        },
        combinations = {
            '\u1FFD\u0391': '\u1FBB', // capital alpha w/ oxia
            '\u1FFD\u0395': '\u1FC9', // capital epsilon w/ oxia
            '\u1FFD\u0397': '\u1FCB', // capital eta w/ oxia
            '\u1FFD\u0399': '\u1FDB', // capital iota w/ oxia
            '\u1FFD\u039F': '\u1FF9', // capital omicron w/ oxia
            '\u1FFD\u03A5': '\u1FEB', // capital upsilon w/ oxia
            '\u1FFD\u03A9': '\u1FFB', // capital omega w/ oxia

            '\u1FEF\u0391': '\u1FBA', // capital alpha w/ varia
            '\u1FEF\u0395': '\u1FC8', // capital epsilon w/ varia
            '\u1FEF\u0397': '\u1FCA', // capital eta w/ varia
            '\u1FEF\u0399': '\u1FDA', // capital iota w/ varia
            '\u1FEF\u039F': '\u1FF8', // capital omicron w/ varia
            '\u1FEF\u03A5': '\u1FEA', // capital upsilon w/ varia
            '\u1FEF\u03A9': '\u1FFA', // capital omega w/ varia

            '\u1FBF\u0391': '\u1F08', // capital alpha w/ psili
            '\u1FBF\u0395': '\u1F18', // capital epsilon w/ psili
            '\u1FBF\u0397': '\u1F28', // capital eta w/ psili
            '\u1FBF\u0399': '\u1F38', // capital iota w/ psili
            '\u1FBF\u039F': '\u1F48', // capital omicron w/ psili
            '\u1FBF\u03A9': '\u1F68', // capital omega w/ psili

            '\u1FFE\u0391': '\u1F09', // capital alpha w/ dasia
            '\u1FFE\u0395': '\u1F19', // capital epsilon w/ dasia
            '\u1FFE\u0397': '\u1F29', // capital eta w/ dasia
            '\u1FFE\u0399': '\u1F39', // capital iota w/ dasia
            '\u1FFE\u039F': '\u1F49', // capital omicron w/ dasia
            '\u1FFE\u03A5': '\u1F59', // capital upsilon w/ dasia
            '\u1FFE\u03A9': '\u1F69', // capital omega w/ dasia
            '\u1FFE\u03A1': '\u1FEC', // capital rho w/ dasia

            '\u1FCD\u0391': '\u1F0a', // capital alpha w/ psili & varia
            '\u1FCD\u0395': '\u1F1a', // capital epsilon w/ psili & varia
            '\u1FCD\u0397': '\u1F2a', // capital eta w/ psili & varia
            '\u1FCD\u0399': '\u1F3a', // capital iota w/ psili & varia
            '\u1FCD\u039F': '\u1F4a', // capital omicron w/ psili & varia
            '\u1FCD\u03A9': '\u1F6a', // capital omega w/ psili & varia

            '\u1FDD\u0391': '\u1F0b', // capital alpha w/ dasia & varia
            '\u1FDD\u0395': '\u1F1b', // capital epsilon w/ dasia & varia
            '\u1FDD\u0397': '\u1F2b', // capital eta w/ dasia & varia
            '\u1FDD\u0399': '\u1F3b', // capital iota w/ dasia & varia
            '\u1FDD\u039F': '\u1F4b', // capital omicron w/ dasia & varia
            '\u1FDD\u03A5': '\u1F5b', // capital upsilon w/ dasia & varia
            '\u1FDD\u03A9': '\u1F6b', // capital omega w/ dasia & varia

            '\u1FCE\u0391': '\u1F0c', // capital alpha w/ psili & oxia
            '\u1FCE\u0395': '\u1F1c', // capital epsilon w/ psili & oxia
            '\u1FCE\u0397': '\u1F2c', // capital eta w/ psili & oxia
            '\u1FCE\u0399': '\u1F3c', // capital iota w/ psili & oxia
            '\u1FCE\u039F': '\u1F4c', // capital omicron w/ psili & oxia
            '\u1FCE\u03A9': '\u1F6c', // capital omega w/ psili & oxia

            '\u1FDE\u0391': '\u1F0d', // capital alpha w/ dasia & oxia
            '\u1FDE\u0395': '\u1F1d', // capital epsilon w/ dasia & oxia
            '\u1FDE\u0397': '\u1F2d', // capital eta w/ dasia & oxia
            '\u1FDE\u0399': '\u1F3d', // capital iota w/ dasia & oxia
            '\u1FDE\u039F': '\u1F4d', // capital omicron w/ dasia & oxia
            '\u1FDE\u03A5': '\u1F5d', // capital upsilon w/ dasia & oxia
            '\u1FDE\u03A9': '\u1F6d', // capital omega w/ dasia & oxia

            '\u1FCF\u0391': '\u1F0e', // capital alpha w/ psili & perispomeni
            '\u1FCF\u0397': '\u1F2e', // capital eta w/ psili & perispomeni
            '\u1FCF\u0399': '\u1F3e', // capital iota w/ psili & perispomeni
            '\u1FCF\u03A9': '\u1F6e', // capital omega w/ psili & perispomeni

            '\u1FDF\u0391': '\u1F0f', // capital alpha w/ dasia & perispomeni
            '\u1FDF\u0397': '\u1F2f', // capital eta w/ dasia & perispomeni
            '\u1FDF\u0399': '\u1F3f', // capital iota w/ dasia & perispomeni
            '\u1FDF\u03A5': '\u1F5f', // capital upsilon w/ dasia & perispomeni
            '\u1FDF\u03A9': '\u1F6f' // capital omega w/ dasia & perispomeni
        },
        RE_LETTER = 1,
        RE_ANSI_CONV = 2,
        RE_PASSTHRU = 8,
        regexes = [
            [/^([\x21-\x25\x27\x2b\x2f\x3a\x3b\x40A-Z\x5c\x5e\x60a-z\x80\x81\x83-\x90\x98-\x9f\xa1-\xcf\xd0-\xfd])/, [RE_LETTER]],
            [/^([\s\(\)\*\,\-\.\<\=\>\?\[\]\_\{\|\}\~])/, [RE_PASSTHRU]],
            [/^([\u0152\u0153\u0160\u0161\u0178\u017d\u017e\u0192\u02c6\u02dc\u2013\u2014\u2018\u2019\u201c-\u201e\u2020-\u2022\u2026\u2030\u2039\u203a\u20ac\u2122])/, [RE_ANSI_CONV]]
        ],
        RX_DIAC = '[\u1FBF\u1FC0\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FEF\u1FFD\u1FFE]',
        RX_CAPVOWELS = '[\u0391\u0395\u0397\u0399\u039F\u03A1\u03A5\u03A9]', 

        methods = {
            init: function (options) {
                var x = 1;
                return this.each(function () {
                    var lmnt = $(this);
                });
            },

            _atoms: function (wingreek) {
                var match = null,
                    greek;

                if (!wingreek) {
                    return '';
                }

                $.each(regexes, function (i, re) {
                    match = re[0].exec(wingreek);
                    if (match) {
                        var letter;
                        if (re[1][0] === RE_LETTER) {
                            letter = match[1];
                        } else if (re[1][0] === RE_PASSTHRU) {
                            greek = match[1];
                            return false;
                        } else if (re[1][0] === RE_ANSI_CONV) {
                            if (ansi_conversion.hasOwnProperty(match[1])) {
                                letter = ansi_conversion[match[1]];
                            } else {
                                $.error('Can\'t convert probable ANSI ' +
                                    'character ' + match[1]);
                            }
                        }

                        if (alphabet.hasOwnProperty(letter)) {
                            greek = alphabet[letter];
                        } else {
                            greek = '⟦' + match[0] + '⟧';
                        }
                        return false;
                    }
                });

                if (match === null) {
                    $.error('Invalid character \"' + wingreek[0] + '\" (' + wingreek[0].charCodeAt(0).toString(16) + ')');
                }

                return greek +
                    methods._atoms(
                        wingreek.substring(match.index + match[0].length)
                    );
            },

            convert: function (options) {
                var lmnt = this,
                    defaults = {combine: true};

                options = $.extend({}, defaults, options);
                lmnt.contents().each(function (i, n) {
                    if (n.nodeType === 3) {
                        try {
                            var converted = methods._atoms(n.data),
                                uncombined = new RegExp(
                                    RX_DIAC + RX_CAPVOWELS, 'g'),
                                match;

                            // Look for characters that can be combined
                            if (options['combine'] === true) {
                                match = converted.match(uncombined);
                                if (match) {
                                    $.each(match, function (i, m) {
                                        if (combinations.hasOwnProperty(m)) {
                                            converted = converted.replace(
                                                new RegExp(m, "g"), 
                                                combinations[m]);
                                        }
                                    });
                                }
                            }
                            n.data = converted;
                        } catch (e) {
                            console.log(e.message + ' in ' + n.data);
                        }
                    } else {
                        $(n).wingreek2utf8('convert', options);
                    }
                });
            }
        };

    $.fn.wingreek2utf8 = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }

        if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        }

        $.error('Method ' +  method + ' does not exist on jQuery.wingreek2utf8');
    };
}(jQuery));

/*
 * UNICODE NOTES
 *
 * According to the TLG Beta Code Manual 2011, corner brackets will have 
 * different representations in the "next version" (after Unicode 5.0, but not,
 * apparently, yet in 6.0). 
 *
 * lower left  0x24 0x230a 0x2e44 [5
 * lower right      0x230b 0x2e45 ]5
 * 
 * <http://www.tlg.uci.edu/encoding/BCM2011.pdf>
 */

