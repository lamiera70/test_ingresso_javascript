
const eseguiDopo = (callback) => {
    setTimeout(callback, 2000);
};

const  messaggio = () => {
    console.log('Ciao sono una callBack');
};

eseguiDopo(messaggio);









