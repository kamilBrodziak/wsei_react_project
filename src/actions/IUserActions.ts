import { IFee, IProposal, IReview, IUser, IUserAdditionalInformation } from "../Utils/IRestObjects";

export enum UserActionsEnum {
    'SETUSERS' = 'SET_USERS',
    'GET' = 'GET_USER',
    'USERFETCHINGSTATUS' = 'SET_USER_FETCHING_STATUS',
    'LOGOUT' = 'LOGOUT_USER',
    'LOGIN' = 'LOGIN_USER',
    'USERLOADING' = 'RESET_USER_LOADING',
    'FETCHUSERS' = 'USER_FETCHING',
    'SETUSERSINF' = 'SET_USERS_INFORMATION',
    'SETUSERPROPOSALS' = 'SET_USERS_PROPOSALS',
    'FETCHUSERPROPOSALS' = 'FETCH_USER_PROPOSALS',
    'FETCHUSERREVIEWS' = 'FETCH_USER_REVIEWS',
    'FETCHUSERFEES' = 'FETCH_USER_FEES'
}

export interface IFetchUserStatusAction {
    type: UserActionsEnum.USERFETCHINGSTATUS,
    fetching: boolean,
    error: string;
}

export interface IFetchUserAction {
    type: UserActionsEnum.GET,
    users: IUser[],
    usersInformation: IUserAdditionalInformation[]
}


export interface IUserLoginAction {
    type: UserActionsEnum.LOGIN;
    loggedUserId: number;
    loginLoading: boolean;
}

export interface IUserLogoutAction {
    type: UserActionsEnum.LOGOUT;
}

export interface ISetUsersAction {
    type: UserActionsEnum.SETUSERS;
    users: IUser[]
}

export interface ISetUsersInformationAction {
    type: UserActionsEnum.SETUSERSINF,
    information: IUserAdditionalInformation[]
}

export interface IFetchUserProposals {
    type: UserActionsEnum.FETCHUSERPROPOSALS,
    proposals: IProposal[],
    fetching: boolean;
}

export interface IFetchUserReviews {
    type: UserActionsEnum.FETCHUSERREVIEWS,
    reviews: IReview[],
    fetching: boolean;
}

export interface IFetchUserFees {
    type: UserActionsEnum.FETCHUSERFEES,
    fees: IFee[],
    fetching: boolean;
}

export type TUserActions = IFetchUserAction |  IFetchUserStatusAction | IUserLoginAction | IUserLogoutAction | ISetUsersAction |
    ISetUsersInformationAction | IFetchUserProposals | IFetchUserReviews | IFetchUserFees;