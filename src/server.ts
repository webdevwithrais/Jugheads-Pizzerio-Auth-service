function Login(username: string): string {
    console.log(username);
    const user = {
        name: "Rais"
    }
    const name = user["name"]
    return username + name;
}
Login("username")

