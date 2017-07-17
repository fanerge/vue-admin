/**
 * Created by yuzhenfan on 2017/6/15.
 */
const regexp = {
  telphoneNumber: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
}

export const regFunc = {
  isNull: function (val) {
    if(val === 'undefined'){
      return true;
    }
    return false;
  },
  isTelphoneNumber: function(val){
    return regexp.telphoneNumber.test(val);
  }
}
