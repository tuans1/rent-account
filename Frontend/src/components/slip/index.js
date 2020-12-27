import React from 'react';
import './style.css';
import moment from 'moment';
import DatePicker from 'react-datepicker';
export default class Slip extends React.Component {
    state = {
        startDate: new Date(),
    }
    onChange = (e) => {
        this.props.onChange(e.target.value)
    }
    render() {
        const { address, bankAccount, id, joiningDate, phone, position, salary, staffName } = this.props.staff;
        const days = this.props.days;
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
                                <div className="" style={{ backgroundColor: "green", height: 100, width: "25%" }}>

                                </div>
                                <div style={{ width: "50%" }}>
                                    SALARY SLIP
                                </div>
                                <div className="" style={{ backgroundColor: "green", height: 100, width: "25%" }}>

                                </div>
                            </div>
                            <div className="div2">
                                <div className="div2_wrap col-lg-6" style={{ borderRight: "1px solid black" }}>
                                    <div className="div2_test text_padding">
                                        <span>Employee ID </span>
                                        <p>: {id}</p>
                                    </div>
                                    <div className="div2_test text_padding">
                                        <span>Name </span>
                                        <p style={{ fontWeight: 500 }}>: {staffName}</p>
                                    </div>
                                    <div className="div2_test text_padding">
                                        <span>Phone</span>
                                        <p>: {phone}</p>
                                    </div>
                                    <div className="div2_test text_padding">
                                        <span>Address</span>
                                        <p>: {address}</p>
                                    </div>
                                </div>
                                <div className="div2_wrap col-lg-6">
                                    <div className="div2_test text_padding">
                                        <span>Designation </span>
                                        <p>: {position}</p>
                                    </div>
                                    <div className="div2_test text_padding">
                                        <span>Grade</span>
                                        <p>: {id}</p>
                                    </div>
                                    <div className="div2_test text_padding">
                                        <span>Joining Date </span>
                                        <p>: {moment(joiningDate).format("L")}</p>
                                    </div>
                                    <div className="div2_test text_padding">
                                        <span>Days Worked </span>
                                        <input className="xxxx" type="text" value={days} onChange={(e) => this.onChange(e)} placeholder=":" />
                                    </div>
                                </div>
                            </div>
                            <div className="div3">
                                <div className="div3_test text_padding" style={{ borderRight: "1px solid black", width: "50%" }}>
                                    <span>Description</span>
                                </div>
                                <div className="div3_test text_padding" style={{ borderRight: "1px solid black", width: "25%" }}>
                                    <span>Earning</span>
                                </div>
                                <div className="div3_test text_padding" style={{ width: "25%" }}>
                                    <span>Deductions</span>
                                </div>
                            </div>
                            <div className="div4">
                                <div className="div4_test text_padding" style={{ borderRight: "1px solid black", width: "50%" }}>
                                    <p style={{ color: "black", fontWeight: 550, paddingTop: "1.5em" }}>Basic Salary</p>
                                    <p style={{ color: "black", fontWeight: 550 }}>Allowance</p>
                                    <p style={{ color: "black", fontWeight: 550 }}>Tax</p>
                                    <p style={{ paddingTop: "3em", fontWeight: 600, paddingBottom: "1.5em" }}>Total</p>
                                </div>
                                <div className="div4_test text_padding" style={{ borderRight: "1px solid black", width: "25%" }}>
                                    <p style={{ paddingTop: "1.5em" }}>{salary} million</p>
                                    <p>{salary} million</p>
                                    <p>&nbsp;</p>
                                    <p style={{ paddingTop: "3em", paddingBottom: "1.5em" }}>0 million</p>
                                </div>
                                <div className="div4_test text_padding" style={{ width: "25%" }}>
                                    <p style={{ paddingTop: "1.5em" }}>&nbsp;</p>
                                    <p>&nbsp;</p>
                                    <p>5% Basic Salary</p>
                                    <p style={{ paddingTop: "3em", paddingBottom: "1.5em" }}>0 million</p>
                                </div>
                            </div>
                            <div className="div5">
                                <div className="div5_wrap" style={{ width: "50%", borderRight: "1px solid black" }}>
                                    <div className="div5_test " >
                                        <div style={{ paddingTop: "20px" }}>
                                            <p>Payment Date </p>
                                            <p>{moment(Date.now()).format("L")}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="div5_wrap" style={{ width: "50%" }}>
                                    <div className="div5_test text_padding" >
                                        <p style={{ borderBottom: "1px solid black ", fontSize: 22, padding: "10px 0", margin: 0 }}>NET SALARY</p>
                                        <p style={{ padding: "5px 0", margin: 0 }}>{days !== "" ? salary * days : "0"}</p>
                                        <p>One million</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}










