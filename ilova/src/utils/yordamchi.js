export function shakllash(qiymat) {
    qiymat = qiymat.toString();
    let natija = '', n = qiymat.length;

    for (let i = 0, j = n; i < n; i++, j--) {
        if (j % 3 === 0) {
            natija += ' ';
        }

        natija += qiymat[i];
    }

    return natija;
}

export default shakllash;