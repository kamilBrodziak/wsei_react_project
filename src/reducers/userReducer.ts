import { AnyAction } from "redux";
import { TUserActions, UserActionsEnum } from "../actions/IUserActions";
import { IFee, IProposal, IReview, IUser, IUserAdditionalInformation } from "../Utils/IRestObjects";

export interface IUserState {
    loginLoading: boolean,
    loggedUserId: number,
    userFetching: boolean,
    error: string,
    users: IUser[],
    usersInformation: IUserAdditionalInformation[],
    proposals: IProposal[],
    proposalsFetching: boolean,
    reviews: IReview[];
    reviewsFetching: boolean;
    fees: IFee[],
    feesFetching: boolean;
}

const initState : IUserState = {
    loginLoading: false,
    userFetching: false,
    loggedUserId: null,
    error: null,
    users: [],
    usersInformation: [],
    proposals: [],
    proposalsFetching: false,
    reviews: [],
    reviewsFetching: false,
    fees: [],
    feesFetching: false,
}

const userReducer = (state = initState, action:TUserActions):IUserState => {
    switch(action.type) {
        case UserActionsEnum.GET: return {...state, 
            users: action.users,
            usersInformation: action.usersInformation
        };
        case UserActionsEnum.USERFETCHINGSTATUS: return {...state,
            userFetching: action.fetching,
            error: action.error
        }
        case UserActionsEnum.LOGIN: return {...state,
             loggedUserId: action.loggedUserId, 
            loginLoading: action.loginLoading};
        case UserActionsEnum.LOGOUT: return {...state, loggedUserId: null};
        case UserActionsEnum.SETUSERS: return {...state, users: action.users};
        case UserActionsEnum.SETUSERSINF: return {...state, usersInformation: action.information};
        case UserActionsEnum.FETCHUSERPROPOSALS: return {...state, proposals: action.proposals,
            proposalsFetching: action.fetching}
        case UserActionsEnum.FETCHUSERREVIEWS: return {...state, reviews: action.reviews,
            reviewsFetching: action.fetching }
        case UserActionsEnum.FETCHUSERFEES: return {...state, fees: action.fees,
            feesFetching: action.fetching }
        default: return state;
    }
}
export default userReducer;