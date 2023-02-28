const bcrypt = require('bcrypt')

async function pwdCrypt(pwd){
    const salt = await bcrypt.genSalt()
    const newPwd = await bcrypt.hash(pwd, salt)
    return newPwd
}


module.exports = {pwdCrypt}