export let _email = ["VirtualGuide@gmail.com"]
export let _password =["password"]


export default saveEmailPassword = (email,password)=>{
    _email.push(email)
    _password.push(password)
}