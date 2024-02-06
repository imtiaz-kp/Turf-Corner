import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"

export const registerAPI = async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}

//login
export const loginAPI = async (user)=>{
  return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
 }
//admin login
 export const adminLoginAPI = async (user)=>{
  return await commonAPI("POST",`${BASE_URL}/useradmin/login`,user,"")
 }

 export const adminRegisterAPI = async (user)=>{
  return await commonAPI("POST",`${BASE_URL}/useradmin/register`,user,"")
}

//edit turf profile
export const editTurfProfileAPI =async (reqBody,reqHeader)=>{
  return await commonAPI("PUT",`${BASE_URL}/profile/edit/`,reqBody,reqHeader)
}

//edit turf owner profile
export const editTurfOwnerProfileAPI =async (reqBody,reqHeader)=>{
  return await commonAPI("PUT",`${BASE_URL}/ownerprofile/edit/`,reqBody,reqHeader)
}





// //addProject
// export const addProjectAPI= async (reqBody,reqHeader)=>{
//     return await commonAPI("POST",`${BASE_URL}/project/add`,reqBody,reqHeader)
// }

// //homeproject
// export const homeProjectAPI=async()=>{
//  return await commonAPI("GET",`${BASE_URL}/projects/home-projects`,"","")

// }
// //allprojects 
// export const allProjectsAPI=async(searchKey,reqHeader)=>{
//     return await commonAPI("GET",`${BASE_URL}/projects/all?search=${searchKey}`,"",reqHeader)

// }

// //userproject
// export const userProjectAPI= async (reqHeader)=>{
//     return await commonAPI("GET",`${BASE_URL}/user/all-projects`,"",reqHeader)
// }

// //edit project
// export const editProjectAPI =async (projectId,reqBody,reqHeader)=>{
//     return await commonAPI("PUT",`${BASE_URL}/projects/edit/${projectId}`,reqBody,reqHeader)
// }

// //
// export const deleteProjectAPI=async(projectId,reqHeader)=>{
//     return await commonAPI("DELETE",`${BASE_URL}/projects/remove/${projectId}`,{},reqHeader)

// }

// //
// export const editProfileAPI =async (reqBody,reqHeader)=>{
//     return await commonAPI("PUT",`${BASE_URL}/profile/edit/`,reqBody,reqHeader)
// }
