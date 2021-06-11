import { IAttachment, IPhoto } from "./IRestFiles";

export interface IAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
        lat: string,
        lng: string
    }
}

export interface ICompany {
    name: string,
    catchPhrase: string,
    bs: string
}

export interface IUserPostEssentials {
    id: number;
    name: string;
    photo: IPhoto;
}

export interface IUser extends IUserPostEssentials {
    username: string,
    email: string,
    address: IAddress,
    phone: string,
    website: string,
    company: ICompany,
}

export interface IUserAdditionalInformation {
    userId: number;
    expertise: IUserExpertise,
    panelInformation: IUserPanelInformation
}

export interface IUserPanelInformation {
    fee: string;
    terms: IUserPanelInformationTerms;
    correspondants: number[]
}

export interface IUserPanelInformationTerms {
    text: string;
    attachment: IAttachment;
}

export interface IUserExpertise {
    expertise: string[];
    specialties: string[];
    admissions: string[];
    counties: string[];
}

export interface IProposal {
    name: string;
    entity: string;
    location: string;
    expertise: string;
    date: Date;
    firm: string;
}

export interface IReview {
    name: string;
    entity: string;
    location: string;
    expertise: string;
    date: Date;
}

export interface IFee {
    year: Date;
    costCenter: string;
    amount: number;
    lawFirm: string;
}