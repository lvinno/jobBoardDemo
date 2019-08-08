import  mockData from './mock.json'

export const callUserData = () => {
    return new Promise((resolve,reject)=>{
        if(mockData){
            
            resolve(mockData)
        }else{
            reject("err")
        }
    })
}