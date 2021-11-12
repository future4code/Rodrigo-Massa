// import axios from "axios";

// export const getTripDetails = async (token, id) => {

//     let error;
//     let response;

//     try {
//         response = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/rodrigo-massa-banu/trip/${id}`,
//             {
//                 headers: {
//                     auth: token
//                 }
//             }
//         );
//     } catch (e) {
//         error = e.response;
//     }

//     return {
//         response,
//         error
//     }
// }