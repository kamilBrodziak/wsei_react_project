import { Dispatch } from "react";
import { IStore } from "../reducers/rootReducer";
import { IUserState } from "../reducers/userReducer";
import { IFee, IProposal, IReview, IUser, IUserAdditionalInformation } from "../Utils/IRestObjects";
import RestService from "../utils/RestService"
import { IFetchUserAction, IFetchUserFees, IFetchUserProposals, IFetchUserReviews, IFetchUserStatusAction, ISetUsersAction, ISetUsersInformationAction, IUserLoginAction, IUserLogoutAction, UserActionsEnum } from "./IUserActions";



// HELPERS:
export const getLoggedUser = (userState:IUserState) => {
    return userState.users.find(user => user.id === userState.loggedUserId);
}

export const getUser = (users:IUser[], id: number) => {
    return users.find(user => user.id === id);
}

export const getLoggedUserInformation = (userState:IUserState) => {
    return userState.usersInformation.find(userInf => userInf.userId === userState.loggedUserId);
}

export const getUsers = (ids: number[]) => async(dispatch:any, getState:() => IStore) => {
    await fetchMissingUsersAction(ids)(dispatch, getState);
    const users = getState().userState.users;
    return ids.map(id => getUser(users, id)); 
}


const fetchUser = async(id:number) => {
    const returnObj:{user:IUser, userInformation:IUserAdditionalInformation} = {
        user: null,
        userInformation: null
    }
    let user = await RestService.getUser(id);
    if(Object.keys(user).length > 1) {
        user.photo = await RestService.getPhoto(user.id);
        returnObj.user = user;
        returnObj.userInformation = RestService.getUserInformation(id)
    }
    return returnObj;
}

// Actions

export const fetchUserAction = (id:number) => async(dispatch:Dispatch<IFetchUserStatusAction | IFetchUserAction>, getState:() => IStore) => {
    await fetchUsersAction([id])(dispatch, getState);
}

export const fetchMissingUsersAction = (ids:number[]) => async(dispatch:Dispatch<IFetchUserStatusAction | IFetchUserAction>, getState:() => IStore) => {
    const idsNotFound = [];
    for (const id of ids) {
        const user = getUser(getState().userState.users, id)
        if(!user) {
            idsNotFound.push(id);
        }
    }
    if(idsNotFound.length) {
        await fetchUsersAction(idsNotFound)(dispatch,getState);
    }
}

export const fetchUsersAction = (ids:number[]) => async(dispatch:Dispatch<IFetchUserStatusAction | IFetchUserAction>, getState:() => IStore) => {
    let error = '';
    let users:IUser[] = [...getState().userState.users];
    let usersInformation:IUserAdditionalInformation[] = [...getState().userState.usersInformation]
    
    dispatch({
        type: UserActionsEnum.USERFETCHINGSTATUS,
        error: error,
        fetching: true
    })
    for(let i = 0; i < ids.length; ++i) {
        let id = ids[i];
        let user = getUser(users, id);
        if(!user) {
            const returnObj = await fetchUser(id);
            if(returnObj.user) {
                users.push(returnObj.user);
                usersInformation.push(returnObj.userInformation);
            } else {
                error += 'There is no such user with given id';
            }
        }
    }
    dispatch({
        type: UserActionsEnum.USERFETCHINGSTATUS,
        error: error,
        fetching: false
    })
    dispatch({
        type: UserActionsEnum.GET,
        users: users,
        usersInformation: usersInformation
    });
}

export const loginUserAction = (id: number) => async(dispatch:Dispatch<IUserLoginAction | IFetchUserStatusAction | IFetchUserAction>, getState:() => IStore) => {
    dispatch({
        type: UserActionsEnum.LOGIN,
        loggedUserId: null,
        loginLoading: true
    });
    await fetchUserAction(id)(dispatch, getState);
    const user = getUser(getState().userState.users, id);
    dispatch({
        type: UserActionsEnum.LOGIN,
        loggedUserId: user?.id,
        loginLoading: false
    });
}

export const logoutUserAction = ():IUserLogoutAction => {
    return {
        type: UserActionsEnum.LOGOUT
    }
}

export const updateUserAction = (user:IUser) => (dispatch:Dispatch<ISetUsersAction>, getState: () => IStore) => {
    const users = getState().userState.users.map(oldUser => oldUser.id === user.id ? user : oldUser);
    dispatch({
        type: UserActionsEnum.SETUSERS,
        users: users
    })
}

export const updateUserInformationAction = (userInformation:IUserAdditionalInformation) => 
    (dispatch:Dispatch<ISetUsersInformationAction>, getState:() => IStore) => {
    const usersInformation = getState().userState.usersInformation.map(oldInf => oldInf.userId === userInformation.userId ? userInformation : oldInf);
    dispatch({
        type: UserActionsEnum.SETUSERSINF,
        information: usersInformation
    })
}

export const fetchUserProposalsAction = (userId: number, page: number, limit:number) => 
    async(dispatch:Dispatch<IFetchUserProposals>, getState:() => IStore) => {
    dispatch({
        type: UserActionsEnum.FETCHUSERPROPOSALS,
        proposals: [],
        fetching: true  
    })
    let proposals:IProposal[] = RestService.getUserProposals(userId, page, limit);
    setTimeout(() => {
        dispatch({
            type: UserActionsEnum.FETCHUSERPROPOSALS,
            proposals: proposals,
            fetching: false
        })
    }, 500)
}

export const fetchUserReviewsAction = (userId:number, page:number, limit:number) => 
    async(dispatch:Dispatch<IFetchUserReviews>, getState:() => IStore) => {
    dispatch({
        type: UserActionsEnum.FETCHUSERREVIEWS,
        reviews: [],
        fetching: true  
    })
    let reviews:IReview[] = RestService.getUserReviews(userId, page, limit);
    setTimeout(() => {
        dispatch({
            type: UserActionsEnum.FETCHUSERREVIEWS,
            reviews: reviews,
            fetching: false
        })
    }, 500)
}

export const fetchUserFeesAction = (userId:number, page:number, limit:number) => 
    async(dispatch:Dispatch<IFetchUserFees>, getState:() => IStore) => {
    dispatch({
        type: UserActionsEnum.FETCHUSERFEES,
        fees: [],
        fetching: true  
    })
    let fees:IFee[] = RestService.getUserFees(userId, page, limit);
    setTimeout(() => {
        dispatch({
            type: UserActionsEnum.FETCHUSERFEES,
            fees: fees,
            fetching: false
        })
    }, 500)
}