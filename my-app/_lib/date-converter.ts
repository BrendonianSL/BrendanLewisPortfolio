const dateConverter = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return `${dayNames[new Date().getDay()]}, ${monthNames[new Date().getMonth()]} ${new Date().getDate()} ${new Date().getFullYear()}`
}

export default dateConverter