import sha1 from "./sha1";

export default async function getArrivals(id) {
    const response = await fetch(`https://tosamara.ru/api/v2/json?method=getFirstArrivalToStop&KS_ID=${id}&COUNT=5&os=android&clientid=test&authkey=${sha1(id + 5 + "just_f0r_tests")}`);
    return await response.json(); 
}