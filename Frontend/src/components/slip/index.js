import React from 'react';
import './style.css';
import moment from 'moment';
import DatePicker from 'react-datepicker';
export default class Slip extends React.Component {
    state = {
        startDate: new Date()
    }
    render() {
        const { address, bankAccount, id, joiningDate, phone, position, salary, staffName } = this.props.staff;

        function numberToEnglish(n) {

            var string = n.toString(), units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words, and = 'and';

            /* Remove spaces and commas */
            string = string.replace(/[, ]/g, "");

            /* Is number zero? */
            if (parseInt(string) === 0) {
                return 'zero';
            }

            /* Array of units as words */
            units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

            /* Array of tens as words */
            tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

            /* Array of scales as words */
            scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion'];

            /* Split user argument into 3 digit chunks from right to left */
            start = string.length;
            chunks = [];
            while (start > 0) {
                end = start;
                chunks.push(string.slice((start = Math.max(0, start - 3)), end));
            }

            /* Check if function has enough scale words to be able to stringify the user argument */
            chunksLen = chunks.length;
            if (chunksLen > scales.length) {
                return '';
            }

            /* Stringify each integer in each chunk */
            words = [];
            for (i = 0; i < chunksLen; i++) {

                chunk = parseInt(chunks[i]);

                if (chunk) {

                    /* Split chunk into array of individual integers */
                    ints = chunks[i].split('').reverse().map(parseFloat);

                    /* If tens integer is 1, i.e. 10, then add 10 to units integer */
                    if (ints[1] === 1) {
                        ints[0] += 10;
                    }

                    /* Add scale word if chunk is not zero and array item exists */
                    if ((word = scales[i])) {
                        words.push(word);
                    }

                    /* Add unit word if array item exists */
                    if ((word = units[ints[0]])) {
                        words.push(word);
                    }

                    /* Add tens word if array item exists */
                    if ((word = tens[ints[1]])) {
                        words.push(word);
                    }

                    /* Add 'and' string after units or tens integer if: */
                    if (ints[0] || ints[1]) {


                        // if( ints[2] || ! i && chunksLen ) {
                        //     words.push( and );
                        // }

                    }

                    /* Add hundreds word if array item exists */
                    if ((word = units[ints[2]])) {
                        words.push(word + ' hundred');
                    }

                }

            }

            return words.reverse().join(' ');

        }


        // - - - - - Tests - - - - - -
        function test(v) {
            var sep = ('string' == typeof v) ? '"' : '';
            return (numberToEnglish(v));
        }

        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="test_wrapper">
                            <div className="div1">
                                <div className="" style={{ backgroundColor: "green", height: 100, width : "25%"  }}>

                                </div>
                                <div  style={{  width : "50%"  }}>
                                    SALARY SLIP
                                </div>
                                <div className="" style={{ backgroundColor: "green", height: 100, width : "25%"  }}>

                                </div>
                            </div>
                            <div className="div2">
                                <div className="div2_wrap col-lg-6" style={{ borderRight: "1px solid black" }}>
                                    <div className="div2_test">
                                        <h3>Employee ID </h3>
                                        <p>: {id}</p>
                                    </div>
                                    <div className="div2_test">
                                        <h3>Name </h3>
                                        <p>: {staffName}</p>
                                    </div>
                                    <div className="div2_test">
                                        <h3>Phone</h3>
                                        <p>: {phone}</p>
                                    </div>
                                </div>
                                <div className="div2_wrap col-lg-6">
                                    <div className="div2_test">
                                        <h3>Designation </h3>
                                        <p>: {position}</p>
                                    </div>
                                    <div className="div2_test">
                                        <h3>Grade</h3>
                                        <p>: {id}</p>
                                    </div>
                                    <div className="div2_test">
                                        <h3>Joining Date </h3>
                                        <p>: 21</p>
                                    </div>
                                    <div className="div2_test">
                                        <h3>Days Worked </h3>
                                        <p>: 21</p>
                                    </div>
                                </div>
                            </div>
                            <div className="div3">
                                <div className="div3_test" style={{ borderRight: "1px solid black" ,width:"50%" }}>
                                    <h3>Description</h3>
                                </div>
                                <div className="div3_test" style={{ borderRight: "1px solid black" ,width:"25%" }}>
                                    <h3>Earning</h3>
                                </div>
                                <div className="div3_test" style={{ width : "25%" }}>
                                    <h3>Deductions</h3>
                                </div>
                            </div>
                            <div className="div4">
                                <div className="div4_test" style={{ borderRight: "1px solid black",width:"50%" }}>
                                    <p>Basic Salary</p>
                                    <p>Allowance</p>
                                    <p>Tax</p>
                                </div>
                                <div className="div4_test" style={{ borderRight: "1px solid black" ,width : "25%" }}>
                                    <p>{salary} million</p>
                                    <p>{salary} million</p>
                                </div>
                                <div className="div4_test" style={{ width : "25%" }}>
                                    <p>&nbsp;</p>
                                    <p>&nbsp;</p>
                                    <p>5% Basic Salary</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}










