const str = 'Hello World';
const reverse = (str = '') => {
   const { length } = str;
   let res = '';
   for(let i = 0; i < length; i++){
      const el = str[i];
      res = el + res;
   };
   return res;
};
console.log(reverse(str))