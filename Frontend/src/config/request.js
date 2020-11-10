export const  fetchData = async () => {
    try {
        const res = await fetch('http://localhost:6969/api/staff?page=0&size=10&containing=');
        const data = await res.json();
        return data;
    } catch (e) {
        console.log("RUN ERROR")
    }
}