/*
4-55) Calculating Growing Annuities You have 30 years left until retirement and want to retire with $2.5 million. 
Your salary is paid annually, and you will receive $86,000 at the end of the current year. Your salary will increase at 3 percent per year, 
and you can earn a return of 9.4 percent on the money you invest. 
If you save a constant percentage of your salary, what percentage of your salary must you save each year?

FV (Future value) = $2.5 million
C (cash flow) = $86,000
r (rate per period) = 9.4%
g (growth rate, I/Y) = 3%
n (number of periods) = 30


* what percentage of your salary must you save each year?

* STEP 1: find PV of retirement ammt
    - formula:
        FV/(1 + g)^n

* STEP 2: find PVGA (Present Value of a Growing Annuity) using the PV
    - formula: 
        (P/(r-g))[1-((1+g)*(1+r))^n] 
        (https://www.dropbox.com/s/94q1pziutdupvet/Screen-Shot-2020-08-06-13-55-33.54.png?dl=0)

* STEP 3: divide salary by the payment to determine salary
    - formula: 
        100(payment/salary)
*/


let C0 = 100;
let g0 = 0.03;
let n0 = 32;
let r0 = 0.05;



let Ch = 86000;
let rh = 0.094;
let nh = 30;
let gh = 0.03;
let FVh = 2500000;

const PV = (FV, g, n) => {
    let formula = FV / Math.pow(1 + g, n)

    console.log(FV, g, n, formula)

    return formula;
}


const PVGA = (PV, C, g, n, r) => {

    console.log(PV, C, !!PV, !!C)

    let formula = {};

    // We have C but need to calculate PV
    if (!!C)
        formula = C * (1 - Math.pow((1 + g) * Math.pow(1 + r, -1), n)) * Math.pow(r - g, -1);

    // we have PV, but need to calculate C:
    if (!!PV) {
        formula = PV / ((1 / (r - g)) - (1 / (r - g)) * Math.pow((1 + g) / (1 + r), n));

        console.log(`PV = ${PV}, C = ${C}, g = ${g}, n = ${n}, r = ${r}, formula = ${formula}`);
    }
    return formula;
}


//STEP 1: get PV of salary
let pv0 = PV(FVh, rh, nh)
console.log(`PV: ${pv0}`)

//let pvga_C = PVGA(null, C0, g0, n0, r0)
//let pvga_C = PVGA(null, Ch, gh, nh, rh)
//console.log(`PVGA w/ C: ${pvga_C}`)

//STEP 2: get PVGA with PV (and no known cashflow)
let pvga_PV = PVGA(pv0, null, gh, nh, rh);
console.log(`PVGA w/ PV: ${pvga_PV}`);

//STEP 3: get percentage of payment per salary 
let perc = 100 * (pvga_PV / Ch);
console.log(`percent = ${perc}`)