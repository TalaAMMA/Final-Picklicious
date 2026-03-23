export const formatUser=(user)=>{
    return {id:user._id,email:user.email, password:user.password, first_name:user.first_name,last_name:user.last_name, confirm_pass:user.confirm_pass};
}
export const formatUsers=(users)=>{
    return users.map(formatUser);
}
export const format_User=(user)=>{
    return{id:user._id,email:user.email,password:user.password}
}